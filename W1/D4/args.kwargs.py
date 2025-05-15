def say_hello(*args):

    for name in args:
        print(f"Hello, {name}")

    if not args:
        print("Please add a name to say hello")

say_hello("luca")


def user_info(**kwargs ): #kwargs creates dictionaries
    for info in kwargs.values():
        print(info)

user_info(name = "Juliana", age = 35, address = "ramat Gan")


# ex
# create a function called tasks_manager that accepts tasnks 
# and prints each one of the task "Today i need to {task}"

def task_manager(*args):
    for task in args:
        print(f"Today i need do {task}")

task_manager("work", "study")


#using *args and **kwargs together

def party_planner(*args, **kwargs):
    if args:
        print('You need to buy: ')
        for arg in args:
            print(arg)
    else:
        print('there is no food to buy' )

    if kwargs:
        print('Party details: ')

        for key, value in kwargs.items():
            print(f' {key} : \n {value}')
    else:
        print("There is no party details")

party_planner("beer, pizza", adress = "herzel 5", city = "Ramat Gan")

party_planner("beer, pizza")

party_planner(adress = "herzel 5", city = "Ramat Gan")