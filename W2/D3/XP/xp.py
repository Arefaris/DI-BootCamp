import string
import random
import datetime 
from faker import Faker
fake = Faker()
#ex 1
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}"
    
    def __int__(self):
        return self.amount
    
    def __repr__(self):
        return f"{self.amount} {self.currency}"
    
    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        else:
            if self.currency != other.currency:
                raise TypeError("Cannot add between Currency type <dollar> and <shekel>")
            else:
                return self.amount + other.amount
        
    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self
        else:
            self.amount += other.amount
            return self
        
c1 = Currency('dollars', 5)
c2 = Currency('dollars', 10)

print(str(c1))

print(int(c1))

print(repr(c1))

print(c1 + 5)

print(c1 + c2)

print(c1)

c1 += 5
print(c1)

c1 += c2
print(c1)

#ex 3

letters = string.ascii_letters
random_string = ""
for number in range(5):
    random_string += random.choice(letters)
print(random_string)


#ex 4

print(datetime.date.today())

#ex 5
current_date = datetime.datetime.now()
year_srting = current_date.strftime("%Y")
year_srting = int(year_srting) + 1
january_1 = datetime.datetime(year_srting, 1, 1)
print(january_1 - current_date)


#ex 6
def birth(birthdate):
    birth_date_time = datetime.datetime.strptime(birthdate, "%Y-%m-%d")
    current_date = datetime.datetime.now()
    days_srting = current_date - birth_date_time
    print(days_srting.total_seconds())
birth("1996-10-29")

#ex 7
users = []

def add_user(numb):
    user_dict = {}
    for user in range(numb):
        user_dict["name"] = fake.name()
        user_dict["address"] = fake.address()
        user_dict["language_code"] = fake.language_code()
        users.append(user_dict)

add_user(3)
print(users)