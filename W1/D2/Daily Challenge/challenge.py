#challenge 1
number = int(input("Number?"))
length = int(input("Length?"))
numbersList = []

for n in range(1, length+1):
    print(n)
    numbersList.append(number * n)
print(numbersList)

