# Hack the protocol
import multiprocessing
from multiprocessing import reduction, managers
from multiprocessing.managers import BaseManager


REMOTE_HOST = '127.0.0.1'
REMOTE_PORT = 12345
AUTH_KEY = b'example.key'


def bind(instance, func, as_name):
    '''
    bind self into instance
    '''
    setattr(instance, as_name, func.__get__(instance, instance.__class__))

def _new_send(c, obj=None):
    '''
    modify original protocol from 3 to 2
    c: multiprocessing.connection
    '''
    c._check_closed()
    c._check_writable()
    c._send_bytes(reduction.ForkingPickler.dumps(obj, 2)) # specify protocol for supporting python2

def _new_dispatch(c, id, methodname, args=(), kwds={}):
    '''
    modify original multiprocessing.connection.send to _new_send
    c: multiprocessing.connection
    '''
    bind(c, _new_send, 'send')
    c.send((id, methodname, args, kwds))
    kind, result = c.recv()
    if kind == '#RETURN':
        return result
    raise multiprocessing.managers.convert_to_error(kind, result)

def replace_dispatch():
    '''
    modify original multiprocessing.managers.dispatch to _new_dispatch
    '''
    setattr(multiprocessing.managers, 'dispatch', _new_dispatch)


class MyRemoteSingleton:
    __instance = None

    @staticmethod
    def get_my_remote():
        if MyRemoteSingleton.__instance == None:
            MyRemoteSingleton()
        return MyRemoteSingleton.__instance 

    def __init__(self):
        if MyRemoteSingleton.__instance != None:
            raise Exception("my remote should be created, please use MyRemoteSingleton.get_my_remote() to get it")
        else:
            replace_dispatch()
            class QueueManager(BaseManager): pass
            QueueManager.register('MyRemote')
            m = QueueManager(address=(REMOTE_HOST, REMOTE_PORT), authkey=AUTH_KEY)
            m.connect()
            MyRemoteSingleton.__instance = m.MyRemote()


if __name__ == '__main__':
    mr = MyRemoteSingleton.get_my_remote()
    print(mr.hello_world())
