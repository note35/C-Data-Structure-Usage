class LazySingleton:
    __singleton_instance = None

    @classmethod
    def instance(cls):
        if not cls.__singleton_instance:
            cls.__singleton_instance = object()
        return cls.__singleton_instance


print(LazySingleton._LazySingleton__singleton_instance)  # None
ls = LazySingleton.instance()
print(LazySingleton._LazySingleton__singleton_instance)  # <object object at 0x000000000>
