class EagerSingleton:
    __singleton_instance = object()

    @classmethod
    def instance(cls):
        return cls.__singleton_instance

print(EagerSingleton._EagerSingleton__singleton_instance)  # <object object at 0x000000000>
