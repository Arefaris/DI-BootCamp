#Loops for and while loops

# For loops
fruits = ["apple", "banana", "kiwi", "pear"]

for each_fruit in fruits:
    print(f"I love {each_fruit}")

for i in range(1, 10):
    print(i)

odd_nums =  list(range(1, 11, 2))
print(odd_nums)
print(min(odd_nums))
print(max(odd_nums))
print(sum(odd_nums))


# While loop: condition

num = 0

while num <= 10:
    print(num)
    num += 1

secret_number = 77
user_number = int(input("Try a number"))

while secret_number != user_number:
    print("not the number")
    user_number = input("Try a number")
else:
    print("Congrats you won!")