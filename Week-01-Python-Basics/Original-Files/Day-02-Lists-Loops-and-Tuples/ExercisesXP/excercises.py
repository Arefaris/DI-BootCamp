#ex 1

my_fav_numbers = {1, 2, 3, 9}

my_fav_numbers.add(4)

print(my_fav_numbers)

my_fav_numbers.remove(4)

print(my_fav_numbers)

friend_fav_numbers = {1, 5, 3, 8, 9}

our_fav_numbers = my_fav_numbers.intersection(friend_fav_numbers)

print(our_fav_numbers)


# ex 2

numbers = (1, 2, 3, 4, 5)
# we cant add anything to a tuple, since tuples are immutable
# however there are workaround, such as creating a new list, 
# changing it and then create a new tuple from that list

#workaround on how to change tuples:
#making a new list from our tuple
temp_list = list(numbers)
#adding numbers to a list
temp_list.extend([6, 7])
#making a new tuple from a list and reasinging it to a numbers
numbers = tuple(temp_list)
print(numbers)

# ex 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
print(basket)
basket.remove("Blueberries")
print(basket)
basket.append("Kiwi")
print(basket)
basket.insert(0, "Apples")
print(basket)
print(basket.count("Apples"))
basket.clear()
print(basket)

# ex 4
# empy list
num_list = []
# starting flag
# 
user_num = 1
for number in range(1, 9):
    user_num += 0.5
    num_list.append(user_num)
print(num_list)

# ex 5
for number in range(1, 21):
    print(number)

for number in range(1, 20):
    if number % 2 == 0:
        print(number)
        
        
# ex 6
my_name = "vladislav"
user_guess = input("Whats my name? ").lower()

while user_guess != my_name:
    user_guess = input("Whats my name? ").lower()
else:
    print("Congrats you guess my name!")
      

# ex 7
your_favorite_fruits = input("Your favoriute fruits? ")
list_of_fav_fruits = your_favorite_fruits.split()
user_choose = input("name any fruit :)")

if user_choose in list_of_fav_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# ex 8
topping = input("What pizza toppings do you want? Type `q` to quit ").lower()
list_of_toppings = []
base_price_of_pizza = 10

while topping != "q":
    list_of_toppings.append(topping)
    print(f"Added {topping} to your pizza.")
    topping = input("What pizza toppings do you want? Type `q` to quit ").lower()
    base_price_of_pizza += 2.50
result = ", ".join(list_of_toppings)
print(f"Your toppings are {result}. Total cost is ${base_price_of_pizza}")

# ex 9
age = ""
total_ticket_price = 0
age = int(input("Hello, whats your age? Type `q` to calculate final price "))

while age != "q":
    age = int(age)
    if age <= 3:
        print("The ticket is free for you")
    elif age <= 12:
        total_ticket_price += 10
        print("For people aged 3 to 12 price is 10$")
    elif age > 12:
        total_ticket_price += 15
        print("For people aged 12 and over price is $15")
    age = input("Anyone else whants to see a movie? If yes, whats your age? Type `q` to calculate final price ")
print(f"Total price for your family is {total_ticket_price}")

# ex 9 bonus:

age = input("Whats your age? This movie only for ages 16–21")
list_of_viewers = []

while age != "q":
    age = int(age)
    # (only for ages 16–21).
    if age < 16 or age > 21:
        print("You are not allowed to watch This movie only for ages 16–21 type 'q' to quit")
        age = input("Whats your age? This movie only for ages 16–21")
    else:
        list_of_viewers.append(str(age))
        age = input("Whats your age?")
ages = ", ".join(list_of_viewers)
print(f"Final List of attendees is {len(list_of_viewers)} people, ages: {ages}")

# ex 10
sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]
finished_sandwiches = []
for sandwich in sandwich_orders:
    if sandwich == "Pastrami":
        pass
    else:
        finished_sandwiches.append(sandwich)
        print(f"I made your {sandwich} sandwich.")
final_list_of_sandwiches = ", ".join(finished_sandwiches)        
print(f"Final List of sandwiches are {final_list_of_sandwiches}")