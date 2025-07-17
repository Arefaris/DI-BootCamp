#ex 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
key_values = {}
index = 0

for value in values:
    key_values[keys[index]] = value
    index += 1

print(key_values)

# ex 2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total = 0

for person in family:
    if family[person] < 3:
        pass
    elif family[person] >= 3 and family[person] <= 12:
        total += 10
        print(f"Price for a {person} is $10")
    elif family[person] > 12:
        total += 15
        print(f"Price for a {person} is $15")

print(f"Total price for a whole family is {total}")

# ex 2 bonus:

family_dict = {}
exit = False
total = 0

while exit != True:
    name_age = input("Name and age please? Exmaple: Rick 43. Type `q` to finnish and for total cost")
    #spliting user input in two diffren variables
    if name_age == "q":
        break
    name, age = name_age.split()
    #populating our family dict
    family_dict[name] = int(age)

for person in family_dict:
    if family_dict[person] < 3:
        pass
    elif family_dict[person] >= 3 and family_dict[person] <= 12:
        total += 10
        print(f"Price for a {person} is $10")
    elif family_dict[person] > 12:
        total += 15
        print(f"Price for a {person} is $15")

print(f"Total price for a whole family is {total}")

#ex 3

brand = {"name": "Zara", "creation_date": 1975, 
         "creator_name": "Amancio Ortega Gaona", 
         "type_of_clothes": ["men", "women", "children", "home"], 
         "international_competitors": ["Gap", "H&M", "Benetton"],
         "number_stores": 7000, 
         "major_color": {"France": "blue", "Spain": "red", "US": ["pink", "green"]}}

brand["number_stores"] = 2

print(brand)
print(brand["type_of_clothes"])

brand["country_creation"] = "Spain"

print(brand)

if brand["international_competitors"]:
    brand["international_competitors"].append("Desigual")
print(brand["international_competitors"])

#Deleting the creation_date key
brand.pop("creation_date")
print(brand)

#last item in international_competitors.
print(brand["international_competitors"][-1])

#major colors in the US.
print(brand["major_color"]["US"])

#number of keys in the dictionary.
print(len(brand))

#all keys of the dictionary.
print(brand.keys())

more_on_zara = {
    "creation_date" : 1995,
    "number_stores": 5
}
# merging brand with more_on_zara
brand.update(more_on_zara)

print(brand)

# ex 4
# 1.
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
index = 0
users_indexes = {}

for user in users:
    users_indexes[user] = index
    index += 1


print(users_indexes)

# 2.
reverse = {}
index = 0
for user in users:
    reverse[index] = user
    index += 1

print(reverse)

# 3.
index = 0
users.sort()
users_indexes = {}

for user in users:
    users_indexes[user] = index
    index += 1

print(users_indexes)
