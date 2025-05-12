#ex 1

print("Hello world \n" * 4)

#ex 2

print((99 ** 3)*8)


#ex 3
# 5 < 3 false
# 3 == 3 true
# 3 == "3" false
# "3" > 3 false
# "Hello" == "hello" false



# ex 4
computer_brand = "lenovo"
print(f"I have a {computer_brand} computer.")


#ex 5
name = "Vladislav"
age = 28
shoe_size = 43
info = f"Hello, my name is {name}! Im {age} old, my shoe size is {shoe_size}, and i love dogs!"
print(info)


#ex 6
a = 14
b = 12

if a > b:
    print("Hello World")

#ex 7
user_number = int(input("Your number, please? "))

if user_number % 2 == 0:
    print("Your number is even!")
elif user_number % 2 != 0:
    print("Your number is odd!")


#ex 8
my_name = "vladislav"
user_name = input("Tell me your name! ").lower()

if user_name == my_name:
    print("No way!! We have the same name!")
else:
    print("You have a beautiful name :^")

#ex 9
user_height = int(input("Hello! Please tell me your height in cm "))

if user_height >= 145:
    print("You are tall enough to ride our ride! Be carefull and have fun :)")
elif user_height < 145:
    print("Sorry cant allow short people to our ride! You need to grow some more to ride :)")