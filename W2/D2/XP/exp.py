class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

# step1
class Siamese(Cat):
    def __init__(self, name, age):
        super().__init__(name, age)
    pass

#step 2
bengal_cat = Bengal("masha", 15)
chartreux_cat = Chartreux("Katya", 5)
siaseme_cat = Siamese("Marina", 2)
all_cats = [bengal_cat, chartreux_cat, siaseme_cat]

#step 3
sara_pets = Pets(all_cats)

#step 4
sara_pets.walk()

#ex2 

class Dog:
    def __init__(self, name, age, weight):
        # ... code to initialize attributes ...
        self.name = name
        self.age = age
        self.weight = weight


    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        # ... code to determine and return winner ...
        dog1 = self.run_speed() * self.weight
        dog2 = other_dog.run_speed() * other_dog.weight

        if dog1 > dog2:
            return f"{self.name} has won"
        else:
             
             return f"{other_dog.name} has won"
        
# Step 2: Create dog instances
#... your code here
dog1 = Dog("Bob", 5, 5)
dog2 = Dog("Masha", 5, 4)

# Step 3: Test dog methods
print(dog1.bark())
print(dog2.run_speed())
print(dog1.fight(dog2))

#ex 4
#step 1
class Person():
    def __init__(self, first_name, age, last_name = ""):
        self.first_name = first_name
        self.age = age
        self.last_name = last_name
        pass

    def is_18(self):
        if self.age >= 18:
            return True
        else:
            return False
        
#step 2
class Family():
    def __init__(self, last_name, members = []):
        
        self.last_name = last_name
        self.members = members
        pass

    def born(self, first_name, age):
        person = Person(first_name, age, self.last_name)
        self.members.append(person)


    def check_majority(self, first_name):
        old_enough = False
        for member in self.members:
            if member.first_name == first_name:
                old_enough = member.is_18()
                if old_enough:
                    print("You are over 18, your parents Jane and John accept that you will go out with your friends")
                else:
                    print("Sorry, you are not allowed to go out with your friends.")
                    
    def family_presentation(self):
        print(f"Family last name is {self.last_name}")
        print("Family consists of")
        for member in self.members:
            print(member.first_name, member.age)
          

family = Family("Fishman")
family.born("Vlad", 28)
family.born("Alex", 2)
family.born("Katya", 5)
family.check_majority("Alex")
family.family_presentation()