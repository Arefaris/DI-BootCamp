class Farm():
    def __init__(self, farm_name, animals = {}):
        self.farm_name = farm_name
        self.animals = animals

    def add_animal(self, animal_type, count = 1):

        if animal_type in self.animals:
            count += 1
        else:
            self.animals[animal_type] = count
        return self
    
    def get_info(self):
        e = "E-I-E-I-0!"
        print(f"{self.farm_name}'s farm")

        for animal, count in self.animals.items():
            print(f"{animal:<5} : {count}")
        
        print(f"{e:>15}")

    def get_animal_types(self):
        sorted_list = []
        
        for animal in self.animals:
            sorted_list.append(animal)
        
        return sorted(sorted_list)

    def get_short_info(self):
        animals = self.get_animal_types()
        
        sorted_animals = dict(sorted(self.animals.items()))

        start_info = f"{self.farm_name} has "
        list_of_animals = []

        for animal, count in sorted_animals.items():
            if count > 1:
                list_of_animals.append(f"{animal}s") 
            else:
                list_of_animals.append(f"{animal}") 

        return start_info + f"{', '.join(list_of_animals)}."

macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
macdonald.get_info()      
macdonald.get_animal_types()
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
