#OOP: OBJECT ORIENTED PROGRAMING

#WHAT IS AN OBJECT?

#WHAT IS A CLASS?

#HOW TO CREATE A CLASS

#naming convention: Capital letter

class Dog:
    # its basicaly a dictionary
    # описывает класс
    def __init__(self, name, color, breed, age):
        print("creating object")
        self.name = name
        self.color = color 
        self.breed = breed
        self.age = age
        pass

    # method
    # what does object do 
    # how to create methods of the class
    def bark(self):
        print(f"{self.name} is barking")

    def walk(self, meters):
        print(f"{self.name} is walking {meters} meteres")

    #changing 
    def birthday(self):
        self.age += 1
        return self

    def rename(self, name):
        self.name = name
        return self
    



shelter_dog = Dog("rex", "black", "shelter", 5)
shelter_dog.walk(5)
shelter_dog.birthday()
shelter_dog.rename("Ashly")
print(shelter_dog.name)
#print(shelter_dog.__dict__)
#An instance (or object) of class Dog is created:
#shelter_dog = Dog()

#Creating attributes to the instance
#shelter_dog.color = "black"
#print(shelter_dog.color)

#pitbull = Dog()
#print(pitbull.color)

#ex 1

#create two objects(instances of the class Dog)
york_shire = Dog("Mikki", "Gold-black", "Yorshire Tereer", 6)
pittbull = Dog("Princess", "WHite", "Pittbull", 4)
pittbull.bark()

my_dogs = [york_shire, pittbull]

for dog in my_dogs:
    print(dog.name)

#my_dogs_objects = [obj for obj in globals().values if isinstance(obj, Dog)]

# ex 2
