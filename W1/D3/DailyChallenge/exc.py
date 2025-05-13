#challenge 1

word = input("Word please :)")
dictionary = {}
index = 0

for char in word:
    if char not in dictionary:
        dictionary[char] = [index]
        index += 1
    elif char in dictionary:
        dictionary[char].append(index)
        index += 1

print(dictionary)

#challenge 2

items_purchase = {"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}
wallet = "$1"

#removing $ from wallet
wallet = wallet[1:]
items = []


for key, value in items_purchase.items():
    value = value[1:] #striping dollar sign
    value = value.replace(",", "") #removing commas before converting to int
    value = int(value)

    if value < int(wallet):
        items.append(key)
        items = sorted(items)

if len(items) > 0:
    print(items)
else:
    print("Nothing")