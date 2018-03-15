from multiprocessing.managers import BaseManager


REMOTE_HOST = '127.0.0.1'
REMOTE_PORT = 12345
AUTH_KEY = b'example.key'


class QueueManager(BaseManager): pass


if __name__ == '__main__':
    QueueManager.register('MyRemote')
    m = QueueManager(address=(REMOTE_HOST, REMOTE_PORT), authkey=AUTH_KEY)
    m.connect()
    mr = m.MyRemote()
    print(mr.hello_world())
