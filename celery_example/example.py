import random

from celery import group, chain
from proj.tasks import add, mul, xsum

############
# Single CPU
############
ans_pool = []
for i in range(0, 10):
    rand1 = random.randint(0,99)
    rand2 = random.randint(0,99)
    ans_pool.append(
        (add.delay(rand1, rand2).get(), mul.delay(rand1, rand2).get())
    )
print(ans_pool)


##############
# Multiple CPU + Group/Chord
##############

# Prepare data and assign tasks
prepare_add = []
prepare_mul = []
for i in range(0, 10):
    rand1 = random.randint(0, 99)
    rand2 = random.randint(0, 99)
    prepare_add.append(add.s(rand1, rand2))
    prepare_mul.append(mul.s(rand1, rand2))

# Group tasks
group_add = group(prepare_add)
group_mul = group(prepare_mul)

# Apply async (waste few time)
result_add = group_add.apply_async()
result_mul = group_mul.apply_async()
result_sum = (group(prepare_add) | xsum.s())()

# Get result (waste lots time)
print([item.get() for item in result_add])
print([item.get() for item in result_mul])
print(result_sum.get())


##############
# Multiple CPU + Chain 
##############

# Prepare data and assign tasks
rand1 = random.randint(0, 99)
rand2 = random.randint(0, 99)
rand3 = random.randint(0, 99)

# Run chain
chain_val = chain(add.s(rand1, rand2) | mul.s(rand3))()
print(chain_val.get())
