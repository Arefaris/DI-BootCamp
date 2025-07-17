import os
import random
dir_path = os.path.dirname(os.path.realpath(__file__))
import json

#ex 1
def main():
    print("Purpose of this program is to read from text file, \n choose random number of words provided by the user \n and construct a sentence")
    user_len = 0

    while True:
        try:
            user_len = int(input("Please provide sentence len, by providing number in range 2-20 "))
            if user_len < 2 or user_len > 20:
                print("Number not in range. Please provide number in range 2-20")
                break
            else:
                print(get_random_sentence(user_len))
                break   
        except ValueError:
            print("Invalid input, please provide a number in range 2-20")
            break
            

def get_words_from_file(filepath):
    with open(f"{filepath}/starwars.txt", "r", encoding="utf-8") as file:
        output = file.readlines()
        list_of_words = []

        for line in output:
            line = line.split()
            list_of_words.extend(line)
    return list_of_words


def get_random_sentence(len):
    list_of_words = get_words_from_file(dir_path)
    
    sentence = []
    for ran in range(len):
        word = random.choice(list_of_words)
        sentence.append(word)
    sentence = " ".join(sentence)
    return sentence.lower()


#Uncomment for test ex1
#main()

#ex 2

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

# converting json string to a dict
sample_dict = json.loads(sampleJson)
# salary key
salary = sample_dict["company"]["employee"]["payable"]["salary"]
print(salary)
# birthday key
sample_dict["company"]["employee"]["birth_date"] = "1996-10-29"

with open(f"{dir_path}/sample.json", "w") as file:
    json.dump(sample_dict, file, indent=5)