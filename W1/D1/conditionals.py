#CONDITIONALS 
#syntax
#if condtition:
#    <indented block of code>

# secret_number = 55
# user_number = int(input("Guess a number: "))

# if user_number == secret_number:
#     print("Congrats, you won!")
# elif user_number == 7:
#     print("Oh, thats my fav number")
# else:
#     print("Sorry, not the same number")


usrNmb = int(input("Number? "))

if usrNmb % 3 == 0 and usrNmb % 5 == 0:
    print("FizzBuzz")
elif usrNmb % 3 == 0:
    print("Fizz")
elif usrNmb % 5 == 0:
    print("Buzz")
    