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

print(LazySingletonThreadSafe._LazySingletonThreadSafe__singleton_instance)
lsts = LazySingletonThreadSafe.instance()
print(LazySingletonThreadSafe._LazySingletonThreadSafe__singleton_instance)
