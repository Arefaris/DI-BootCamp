import random
user_string = input("String please! ")

if len(user_string) < 10:
    print("String not long enough.")
elif len(user_string) > 10:
    print("String too long.")
elif len(user_string) == 10:
    print("Perfect string")

print(user_string[0], user_string[-1])

user_sentence = ""
for char in user_string:
    user_sentence += char
    print(user_sentence)

#bonus
user_list = []
for char in user_string:
    user_list.append(char)
    random.shuffle(user_list)
    print(user_list)