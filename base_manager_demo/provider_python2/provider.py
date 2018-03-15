from multiprocessing.managers import BaseManager


HOST = '127.0.0.1'
PORT = 12345
AUTH_KEY = 'example.key'


class MyManager(BaseManager): pass


class MyRemoteClass(object):

    def hello_world(self):
        return 'hello world'


def run_cache(host, port, key):
    MyManager.register('MyRemote', MyRemoteClass)
    manager = MyManager(address=(host, port), authkey=key)
    server = manager.get_server()
    print('provider is searved on {}:{}'.format(host, port))
    server.serve_forever()


if __name__ == '__main__':
    run_cache(HOST, PORT, AUTH_KEY)
