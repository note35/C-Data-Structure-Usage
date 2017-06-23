### Using Redis as the broker

    $ brew install redis
    $ redis-server /usr/local/etc/redis.conf

### Basic pip install

    - celery
    - SQLAlchemy
    - redis

### Run Celery program

    # Under proj directory usage
    $ celery -A proj worker -l info

    # Multi worker
    $ celery multi start w1 -A proj -l info
    $ celery multi restart w1 -A proj -l info
    $ celery multi stop w1 -A proj -l info
    $ celery multi stopwait w1 -A proj -l info # wait async

    # Assign log/pid file
    $ celery multi start w1 -A proj -l info --pidfile=/var/run/celery/%n.pid \
                                            --logfile=/var/log/celery/%n%I.log
    $ celery multi start 10 -A proj -l info \
                            -Q:1-3 images,video \
                            -Q:4,5 data \
                            -Q default \
                            -L:4,5 debug

    # Inspect active
    $ celery -A proj status
    $ celery -A proj inspect active
    $ celery -A proj inspect active --destination=celery@example.com
    
    # control
    $ celery -A proj control --help
    $ celery -A proj control enable_events


### Optimization

http://docs.celeryproject.org/en/latest/userguide/optimizing.html#guide-optimizing

- monitor queue's status

https://github.com/ask/rabbitmq-munin


---

### Basic Celery manipulation

Run task
```code=python
>>> add.delay(2, 2)
>>> add.apply_async((2, 2))
>>> add.apply_async((2, 2), queue='lopri', countdown=10)
```

Retreive return value
```code=python
>>> res = add.delay(2, 2)
>>> res.get(timeout=1)
>>> res.id
```

Ignore exception
```code=python
>>> res.get(propagate=False)
>>> res.failed()
>>> res.successful()
>>> res.state
>>> # PENDING -> STARTED -> RETRY -> STARTED -> RETRY -> STARTED -> SUCCESS
```

---

Parellel tasks - Signature
```code=python
>>> add.signature((2, 2), countdown=10)
>>> add.s(2, 2)
```

Parellel tasks - Combination
```code=python
>>> s1 = add.s(2, 2)
>>> res = s1.delay()
>>> res.get()

# incomplete partial: add(?, 2)
>>> s2 = add.s(2)
# resolves the partial: add(8, 2)
>>> res = s2.delay(8)
>>> res.get()

>>> s3 = add.s(2, 2, debug=True)
>>> s3.delay(debug=False)   # debug is now False.
```

Parellel tasks - Run
```code=python
# Group
>>> group(add.s(i, i) for i in xrange(10))().get()

# Chain: (4 + 4) * 8
>>> chain(add.s(4, 4) | mul.s(8))().get()

# Partial Chain: (? + 4) * 8
>>> g = chain(add.s(4) | mul.s(8))
>>> g(4).get()

# Chords: Groups + callback
>>> (group(add.s(i, i) for i in xrange(10)) | xsum.s())().get()
```

---

Routing

```code=python
app.conf.update(
    task_routes = {
        'proj.tasks.add': {'queue': 'hipri'},
    },
)

>>> add.apply_async((2, 2), queue='hipri')

# specify multiple queues
# default queue is named celery
$ celery -A proj worker -Q hipri,celery
```
