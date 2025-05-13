#challenge 1
number = int(input("Number?"))

length = int(input("Length?"))

numbersList = []

for n in range(1, length+1):
    numbersList.append(number * n)
print(numbersList)

#challenge 2
string = input("String?")
sentence = ""
for letter in string:
    if letter in sentence:
        pass
    else:
        sentence += letter
print(sentence)