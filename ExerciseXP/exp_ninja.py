#ex3
#>>> 3 <= 3 < 9 True
#>>> 3 == 3 == 3 True
#>>> bool(0) False
#bool(5 == "5") False
#bool(4 == 4) == bool("4" == "4") True  
#bool(bool(None)) False

#x = (1 == True)
# y = (1 == False)
# a = True + 4 
# b = False + 10
# print("x is", x) x is, True
# print("y is", y) y is, False
# print("a:", a)  "a:", 5
# print("b:", b) "b:", 10

#ex4
my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           Ut enim ad minim veniam, quis nostrud exercitation ullamco 
           laboris nisi ut aliquip ex ea commodo consequat. 
           Duis aute irure dolor in reprehenderit in voluptate velit 
           esse cillum dolore eu fugiat nulla pariatur. 
           Excepteur sint occaecat cupidatat non proident, 
           sunt in culpa qui officia deserunt mollit anim id est laborum."""

print(len(my_text))

#ex5

user_sentence = input("Please provide longest sentence without character a")
currentRecord = 0

while "A" not in user_sentence:
    if len(user_sentence) > currentRecord:
        print("Congratulations!, how about something longer? ;)")
        currentRecord = len(user_sentence)
        user_sentence = input()
    if len(user_sentence) < currentRecord:
        print("Sorry but this sentence is not longer than a previous one, its a game over!")
        break
if "A" in user_sentence:
    print("You have an A in your sentence, sorry, but its game over")