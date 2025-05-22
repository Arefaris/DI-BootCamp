import os
import re
#user dir
dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
    def __init__(self):
        self.file = self.parse_file()
        pass
    
    @staticmethod
    def parse_file():
        with open(f"{dir_path}\sowpods.txt", "r", encoding="utf-8") as file:
            output = file.readlines()
            list_of_words = []

            for line in output:
                line = line.lower().split()
                list_of_words.extend(line)
        return list_of_words
    
    #check if word is valid
    def is_valid_word(self, word):
        for w in self.file:
            if word == w:
                return True
        return False

    def get_anagrams(self, word):
        anagram_list = []
        for w in self.file:
            if self.is_anagram(word, w):
                anagram_list.append(w)
        return anagram_list


    def is_anagram(self, word1, word2):
        if word1 != word2 and len(word1) == len(word2):
            for char in word1:
                if char in word2:
                    pass
                else:
                    return False
                
            for char in word2:
                if char in word1:
                    pass
                else:
                    return False
                
            return True
        else:
            return False
        
