from datetime import datetime, date 


class Person:

    def __init__(self, name, last_name, birth_date):
        self.name = name
        self.last_name = last_name
        self.birth_date = self.parse_birthdate(birth_date)
        pass

    @property
    def age(self):
        today = date.today()
        age = today.year - self.birth_date.year
        return age

    # method to call before creation of the class 
    @classmethod
    def from_age(cls, name, last_name, age):
        curent_year = datetime.today().year
        birth_year = curent_year - age
        birth_date = f"{birth_year, 1 , 1}"
        return cls(name, last_name, birth_date)

    #method that we exclusivly using in class
    @staticmethod
    def parse_birthdate(date_string):
        return datetime.strptime(date_string, "%Y-%m-%d").date()

p1 = Person("Alice", "Wonder", "1999-02-05")
print(type(p1.birth_date))

from datetime import datetime, date

class Person:
    def __init__(self, name, last_name, birth_date):
        self.name, self.last_name = self.parse_name_last_name(name, last_name)
        
        self.birth_date = self.parse_birthdate(birth_date)

    @classmethod
    def from_age(cls, name, last_name, age):
        current_year = datetime.today().year
        birth_year = current_year - age
        birth_date = f'{birth_year}-1-1'
        return cls(name, last_name, birth_date)

    @staticmethod
    def parse_birthdate(date_string):
        return datetime.strptime(date_string, '%Y-%m-%d').date()
    
    @staticmethod
    def parse_name_last_name(name, last_name):
        if not name.isupper():
            name = name.capitalize()
        if not last_name.isupper():
            last_name = last_name.capitalize()
        return name, last_name
    
    # method that behaves like attribute
    @property
    def age(self):
        today = date.today()
        age = today.year - self.birth_date.year
        return age
    #for user
    def __str__(self):
        return f"{self.name}, {self.last_name} was born on \n age {self.birth_date}"
    #for dev 
    def __repr__(self):
        return f"{self.__dict__}"
    
    def __eq__(self, other):
        return self.age == other.age
    
    # compare
    def __lt__(self, other):
        return self.age < other.age

p1 = Person('Alice', 'Wonder', '1990-02-05')
print(type(p1.birth_date))
print(p1.age) #because I have @property method, the age can be accessed as an atribute

"""p2 = Person.from_age('Bob', 'Smith', 30)
print(p2.birth_date)"""

# print(datetime.today().year)

#create a static method that format the name and last name 
# in case the first letter is not upper case
#usage example: 
p3 = Person('juliana', 'schmidt', '1990-02-05')
#the static method will change it to capital case.

print(p3.name, p3.last_name)
print(p1)
