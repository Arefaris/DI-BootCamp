#ex1
print("Hello world \n" * 4, "I love python \n" * 4)

#ex2
user_month = int(input("Please enter a month (1 to 12) "))

if user_month >= 3 and user_month <= 5:
    print("Current season is Spring!")
elif user_month >= 6 and user_month <= 8:
    print("Current season is Summer!")
elif user_month >= 9 and user_month <= 11:
    print("Current season is Autumn!")
elif user_month >= 12 or user_month <= 2:
    print("Current season is Winter!")