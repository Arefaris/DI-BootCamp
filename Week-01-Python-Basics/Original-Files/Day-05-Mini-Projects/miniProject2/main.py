import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word =  random.choice(wordslist)

hidden_string = ""
HANGMANPICS = ['''
  +---+
  |   |
      |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
      |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
  |   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
      |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 /    |
      |
=========''', '''
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========''']
 
hidden_string = "*" * len(word)
hidden_list = list(hidden_string)
list_of_guessed_letters = []
tries = 0

print("Welcome to the hangMan game!")

#if words has spaces we need to show them
for index, char in enumerate(word):
    if char == " ":
        hidden_list[index] = " "
        
while True:
    
    print("Guessed letters: ", " ".join(list_of_guessed_letters))
    print(f"Tries left: {6 - tries}")
    print("Word: " + "".join(hidden_list))
    
    if tries == 6:
        print(HANGMANPICS[tries])
        print(f"Word was {word}")
        print("GAME OVER")
        break
    else:
        print(HANGMANPICS[tries])
        
    if "*" not in hidden_list:
            print("Congrats! You guessed all the letters!")  
            break
        
    user_letter = input("Guess the letter! " ).lower()
    
    #checking if letter in the list of guessed letters
    
    if user_letter in list_of_guessed_letters:
            print("You have already guess this letter")
            continue
    else:
        list_of_guessed_letters.append(user_letter)
        
    if user_letter not in list(word):
        tries += 1
        continue
                
    for index, letter in enumerate(list(word)):
        
        # we dont need guess spaces
        if " " == letter:
            hidden_list[index] = " "
            
        if letter == user_letter:
            hidden_list[index] = user_letter
        
    
          
    