
# ex1
word = input("Words? ")

splited = word.split(",")

splited.sort()

splited = ",".join(splited)

print(splited)

# ex 2


def longest(sentence = str):
    sentence = sentence.split(" ")
    long = ""
    
    for word in sentence:
        if len(word) > len(long):
            long = word
    return long

lon = longest("Forgetfulness is by all means powerless!")
print(lon)