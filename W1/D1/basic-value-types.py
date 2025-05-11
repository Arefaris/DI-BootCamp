#BASIC-VALUE-TYPES

#STRINGS: is a sequence of chars that represents text in python


# STRINGS METHODS

print("Hello Python".capitalize())
print("Hello Python".upper())
print("Hello Python".lower())
print("Goodnight Moon".replace("Moon", "Honey"))

# Srtrings: SEQUENCE of chars
greetings = "Hello python" 
print(greetings[6:12]) #Slicing a string
print(greetings[2])


#EX 1

description = "strings are..."
description = description.upper()
description.replace("are", "is")
print(description)
print(description[0:7])


#NUMBERS: INTEGER, FLOAT, COMPLEX
a = 5 #int
b = 2.7 #float
c = 5 + 3
d = 5 -2 

print(c)
print(10/2) #division
print(11/2) #floor division
print(11%2) #modulus division
print(round(10/3))



# VARIABLES: NAMING
my_adress = "Ramat gan"

my_age = 35

print("hello" + str(my_age) + "years old")

price = "150"
result = int(price) + 5
print(result)

#user_age = input("What is your age?")
#print(int(user_age) + 50)


# Booleans: True or False values

# Comparison Operators
print(3 > 4)
print(3 < 4)
print(3 <= 4)
print(4 == 4)

#COMPARISON KEY WORDS
print("JS" is "Python")

a = 3500035000
b = 3500035000

print(a == b) #True
print(a is b)
print(bool(" "))

# exercise
bank_balance = "33000"
phone_number = 532287514

print(type(bank_balance))
print(type(phone_number))
print(int(bank_balance))
print(str(phone_number))


# STRING FORMATING F string

print(f"Your bank balance is {bank_balance}")


#CONSTANT 

PI = 3.14