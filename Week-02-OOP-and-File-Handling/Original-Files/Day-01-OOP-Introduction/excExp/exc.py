#ex 1
class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

# Step 1: Create cat objects
# cat1 = create the object
fat_cat = Cat("Garfield", 15)
skinny_cat = Cat("Tom", 5)
fast_cat = Cat("Formula", 2)

# Step 2: Create a function to find the oldest cat


def find_oldest_cat(cat1, cat2, cat3):
    # ... code to find and return the oldest cat ...
    list_of_cats = []
    oldest_age = 0
    oldest_obj = ""
    list_of_cats.extend([cat1, cat2, cat3])

    for cat in list_of_cats:
        if cat.age > oldest_age:
            oldest_obj = cat
            oldest_age = cat.age
    
    return oldest_obj

oldest_cat = find_oldest_cat(fat_cat, skinny_cat, fast_cat)
# Step 3: Print the oldest cat's details
print(F"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")


#ex2
#step 1
class Dog():

    def __init__(self, name, height):
        self.name = name
        self.height = height
        pass

    def bark(self):
        print(f"{self.name} goes woof")
    
    def jump(self):
        print(f"{self.name} jumps {self.height * 2} cm high!”")

#step 2
davids_dog = Dog("bob", 5)
sarahs_dog = Dog("katya", 2)

#step 3
print(f"Davids dog name is {davids_dog.name} and dogs height is {davids_dog.height}")
print(f"Saras dog name is {sarahs_dog.name}  and dogs height is {sarahs_dog.height}")

davids_dog.bark()
davids_dog.jump()
sarahs_dog.bark()
sarahs_dog.jump()

#step 4
def compare_dog_size(*args):
    largest_size = 0
    largest_dog = ""

    for dog in args:
        if dog.height > largest_size:
            largest_size = dog.height
            largest_dog = dog

    print(f"Largest dog is {largest_dog.name} with height {largest_size}")

compare_dog_size(davids_dog, sarahs_dog)


#ex 3

class Song():
    def __init__(self, lyrics = []):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for lyric in self.lyrics:
            print(lyric)
        return self

stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()


#ex 4
class Zoo():
    def __init__(self, zoo_name, animals = []):
        self.zoo_name = zoo_name
        self.animals = animals
        pass

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
        return self
    
    def get_animals(self):
        print(f"Animals in the zoo : {', '.join(self.animals)}")
        return self
    
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
        return self
    
    def sort_animals(self):
        sorted_animals = sorted(self.animals)
        sorted_dict = {}
        for animal in sorted_animals:
            if animal[0] in sorted_dict:
                sorted_dict[animal[0]].append(animal)
            else:
                sorted_dict[animal[0]] = [animal]
                
        self.sorted_animals = sorted_dict
        print(sorted_dict)
        return self


    def get_groups(self):
        for key, value in self.sorted_animals.items():
            print(f"{key}: {value}")


animals = ["Baboon", "Cat", "Bear", "Cougar", "Zebra", "Giraffe", "Lion"]
mexican_zoo = Zoo("mexican", animals)
mexican_zoo.add_animal("Elephant")
mexican_zoo.sell_animal("Baboon")
mexican_zoo.sort_animals()
mexican_zoo.get_animals()
mexican_zoo.get_groups()

ramat_gan_safari = Zoo("Ramat Gan Safari")

# Step 3: Use the Zoo methods
ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.get_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()