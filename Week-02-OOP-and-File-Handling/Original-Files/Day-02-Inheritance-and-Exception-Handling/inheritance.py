class Parent:


    def speak(self):
        print("parent is speaking")

class Child(Parent):
    pass


class Granchild(Child):
    pass

obj1 = Child()
obj1.speak()
obj = Granchild()
obj.speak()

class Animal:
    def __init__(self, name, family, legs):
        self.name = name
        self.family = family
        self.legs = legs
        self.full_name = f'{name} {family}'

class Dog(Animal):
    def bark(self):
        print(f"{self.name} is barking")

    def sleep(self):
        return f'{self.name} is sleeping - from the Dog class'
    
lion = Animal("Lion", "felidae", 4)
print(lion.__dict__)

dog_1 = Dog("Dog", "Canidae", 4)
dog_1.bark()

#ex1
#Create a Cat class that inherit from animal.
#Create a method get_crazy that prints "a self.name is running with its self.legs in full power"


class Cat(Animal):
    def get_crazy(self):
        print(f"A {self.name} is running with its {self.legs} legs in full power")

class Alien:
    def __init__(self, personal_name, planet):
        self.personal_name = personal_name
        self.planet = planet
        pass

    def fly(self):
        return f'{self.name} is flying around'
    
    def sleep(self):
        return f'{self.name} is sleeping - from the Alien class'
    
    def make_sound(self):
        return f'{self.name} is making a sound from Alien'

cat_1 = Cat("Sugar", "Street", 4)

cat_1.get_crazy()

#merging class
#potithion matters
class AlienDog(Dog, Alien):
    def __init__(self, name, family, legs, personal_name, planet):
        Dog.__init__(name, family, legs)
        Alien.__init__(personal_name, planet)
    pass



#aliendog1 = AlienDog("Dog", "Candidae", 4, "Rexi", "Saturn")

#print(aliendog1)

#if want to calll the methond in some specific paerent claass (not by order of inheritanca)
#print(Dog.sleep(aliendog1))

#diffrent method of merging
class Cat(Animal):
    def __init__(self, name, family, legs, trained, nick_name):
        super().__init__(name, legs, family)
        self.trained = trained
        self.nick_name = nick_name

cat_2 = Cat("sugar", "any", 4, True, "meow")

# add two other attributes specifically to the Dog class: trained (boolean), age (int)
# user the super().__init__() to do so
# create an instance of Dog after that and analyse what changed

class Dog(Animal):
    def __init__(self, name, family, legs, age, trained):
        super().__init__(name, family, legs)
        self.age = age
        self.trained = trained
    
    def bark(self):
        print(f'A {self.name} is barking')

    def sleep(self):
        return f'{self.name} is sleeping - from the Dog class'
    
smallDog = Dog("Bob", "any,", 4, 21, trained=True)
