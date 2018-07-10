# What is design pattern?

According to [wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern), a software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. To know more about design pattern, the book: [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns) would be the best option.

# What is Singleton?

Singleton is a **creational** design pattern mentioned in very early chapter in the book** **[[Design Patterns: Elements of Reusable Object-Oriented Software>>http://wiki.c2.com/?SingletonPattern]].

>If a system **only** needs **one instance of a class**, and that instance needs to be accessible in many different parts of a system, you control both instantiation and access by making that class a singleton.

## Common Use Case

A very common use case of Singleton is Logger and ConfigParser in many languages, such as Java, Python.

## Implementation

There are two types of Singleton: **lazy**  and **eager** instantiation. [[Video](https://www.youtube.com/watch?v=xk-AKHUCdGc)] Lazy instantiation is used in most case due to the lower cost. Instance will only be created in the first creation time. [[wiki: Java example](https://en.wikipedia.org/wiki/Lazy_initialization#Java)]

### (Option) classmethod vs staticmethod vs instancemethod vs property

* [What is the difference between classmethod and staticmethod?](https://stackoverflow.com/questions/136097/what-is-the-difference-between-staticmethod-and-classmethod-in-python)
* [How to implement classmethod and staticmethod?](https://docs.python.org/3/howto/descriptor.html#static-methods-and-class-methods)

### Lazy Instantiation Singleton in Python

```python
class LazySingleton:
    __singleton_instance = None

    @classmethod
    def instance(cls):
        if not cls.__singleton_instance:
            cls.__singleton_instance = object()
        return cls.__singleton_instance
```

### Eager Instantiation Singleton in Python

```python
class EagerSingleton:
    __singleton_instance = object()

    @classmethod
    def instance(cls):
        return cls.__singleton_instance
```

### Thread safe?

Since a singleton instance is highly possible to be used by different process/thread, confirming a singleton is thread safe is important. However, singleton is a design pattern without strict implementation limitation, **developer need to handle thread issue** based on different programming languages.

```python
# https://gist.github.com/werediver/4396488
import threading


class LazySingletonThreadSafe:
    __singleton_lock = threading.Lock()
    __singleton_instance = None

    @classmethod
    def instance(cls):
        if not cls.__singleton_instance:
            with cls.__singleton_lock:
                if not cls.__singleton_instance:
                    cls.__singleton_instance = object()
        return cls.__singleton_instance
```

### Renew instance periodically

For some usecases, singleton instance needs to be updated periodically since the original information is outdated. For example, accessing external service which is updated every hour, adding a timer to update your singleton every hour will be an ideal solution to make the instance updated without heavy setup every time. Note, since this pattern can not assure the refresh rate of your data, if your data has zero tolerance to be outdated, this solution will not work.

```python
import threading
import time


TIMEOUT = 5  # renew instance every 5 seconds


class LazySingletonThreadSafeRenew:
    __singleton_lock = threading.Lock()
    __singleton_instance = None
    __start_time = 0

    @classmethod
    def instance(cls):
        now = time.time()
        if not cls.__singleton_instance or now - cls.__start_time > TIMEOUT:
            with cls.__singleton_lock:
                if not cls.__singleton_instance or now - cls.__start_time > TIMEOUT:
                    cls.__singleton_instance = object()
                    cls.__start_time = now
        return cls.__singleton_instance
```
