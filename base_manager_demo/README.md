Base Manager Demo
-----------------

For making **python3** use **python2** library, one possibility is use `multiprocessing.manager` to build a bridge between them. However, `multiprocessing.manager` doesn't provide arguments for modifying the protocol, thus for achieving this, we need to use a hacky way to patch it.


Guide
-----

### provider side

**Setup Environment**

```bash
$ cd provider_python2/
$ virtualenv -p /usr/bin/python2.7 env2
$ . env2/bin/activate.fish
```

**Run provider**

```bash
$ python2.7 provider.py
provider is searved on 127.0.0.1:12345
```


### consumer side

**Setup Environment**

```bash
$ cd consumer_python3/
$ virtualenv -p /usr/local/bin/python3.6 env3
$ . env3/bin/activate.fish
```

**Run fail consumer**

```bash
$ python3.6 consumer_fail.py
ValueError: unsupported pickle protocol: 3
```

*The reason is because of [pickle use different default protocol in Python3 and Python2](https://stackoverflow.com/questions/25843698/valueerror-unsupported-pickle-protocol-3-python2-pickle-can-not-load-the-file). For resolving this, we need to patch the manager.*

**Run success consumer**

```bash
$ python3.6 consumer.py
hello world
```


Related code
------------

- [`multiprocessing.reduction`](https://github.com/python/cpython/blob/master/Lib/multiprocessing/reduction.py)
- [`multiprocessing.connection`](https://github.com/python/cpython/blob/master/Lib/multiprocessing/connection.py)
- [`multiprocessing.managers`](https://github.com/python/cpython/blob/master/Lib/multiprocessing/managers.py)
