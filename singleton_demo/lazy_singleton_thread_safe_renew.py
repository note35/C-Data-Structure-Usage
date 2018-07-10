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



print(LazySingletonThreadSafeRenew._LazySingletonThreadSafeRenew__singleton_instance)
print(LazySingletonThreadSafeRenew.instance())  # renew
time.sleep(4)
print(LazySingletonThreadSafeRenew.instance())
time.sleep(1)
print(LazySingletonThreadSafeRenew.instance())  # timeout, renew
