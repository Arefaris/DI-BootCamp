import random
# ex1
def display_message():
    print("I am learning about functions in Python.")

display_message()

# ex 2
def favorite_book(title):
    print(title)

favorite_book("Harry Potter")

# ex 3
def describe_city(city, country = "Unknown"):
    print(f"{city} is in {country}")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# ex 4
def ran_number(number):
        rnd = random.randint(1, 100)
        if rnd == number:
            print("You guessed the number! Congrats!")
        elif rnd != number:
            print(f"Fail! Your number: {number}, Random number: {rnd}")

ran_number(5)


# ex 5

#step 1-2
def make_shirt(size="large", text="I love Python"):
    print(f"The size of the shirt is {size} and the text is {text}.")


#step 3-4-5
make_shirt()
make_shirt(size="medium") 
make_shirt(size="small", text="I love gemini")

#step 6
make_shirt(size="small", text="Hello!")

# ex 6

# step 1
magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]

# step 2
def show_magicians(magician_names):
     for name in magician_names:
          print(name)

show_magicians(magician_names)

# step 3
def make_great(magician_names):
     for index, name in enumerate(magician_names):
          name = f"{name} the Great"
          magician_names[index] = name
# step 4      
make_great(magician_names)
show_magicians(magician_names)

# ex 7

# step 1
def get_random_temp():
    rnd_temp = random.randint(-10, 40)

    # step 4 (bonus)
    # Get the float number
    rnd_temp = random.uniform(-10, 40)

    # Round to the first decimal
    rnd_temp = round(rnd_temp, 1)

    return rnd_temp

# step 2
def main():
    rnd_temp = get_random_temp()
    print(f"The temperature right now is {rnd_temp} degrees Celsius.")


# step 3
def main():
    rnd_temp = get_random_temp()
    print(f"The temperature right now is {rnd_temp} degrees Celsius.")


    if rnd_temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif rnd_temp > 0 and rnd_temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif rnd_temp >= 16 and rnd_temp <= 23:
        print("Nice weather")
    elif rnd_temp >= 24 and rnd_temp <= 32:
        print("A bit warm, stay hydrated.")
    elif rnd_temp >= 32 and rnd_temp <= 40:
        print("It’s really hot! Stay cool.")

main()

#step 4 (bonus)
#inside the get_random_temp function

#step 5 (bonus)


def get_random_temp(season):
    
    if season == "Winter":
        rnd_temp = random.uniform(-15, 5)
    elif season == "Spring":
        rnd_temp = random.uniform(10, 20)
    elif season == "Summer":
        rnd_temp = random.uniform(20, 35)
    elif season == "Autumn":
        rnd_temp = random.uniform(10, 20)
    
    # Round to the first decimal
    rnd_temp = round(rnd_temp, 1)

    return rnd_temp


def main():
   
    season = ""
    user_month = int(input("Month 1-12" ))
    
    if user_month >= 1 and user_month <= 2 or user_month == 12:
        season = "Winter"
    elif user_month >= 3 and user_month <= 5:
        season = "Spring"
    elif user_month >= 6 and user_month <= 8:
        season = "Summer"
    elif user_month >= 9 and user_month <= 11:
        season = "Autumn"
    
    rnd_temp = get_random_temp(season)
    print(f"The temperature right now is {rnd_temp} degrees Celsius.")

    if rnd_temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today.")
    elif rnd_temp > 0 and rnd_temp <= 16:
        print("Quite chilly! Don’t forget your coat.")
    elif rnd_temp >= 16 and rnd_temp <= 23:
        print("Nice weather")
    elif rnd_temp >= 24 and rnd_temp <= 32:
        print("A bit warm, stay hydrated.")
    elif rnd_temp >= 32 and rnd_temp <= 40:
        print("It’s really hot! Stay cool.")

main()

 