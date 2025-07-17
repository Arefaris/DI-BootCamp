import os
import string
import re

dir_path = os.path.dirname(os.path.realpath(__file__))

class Text:
    def __init__(self, text = ""):
        self.text = text
        
    def word_frequency(self, word):
        list_of_words = self.text.split()

        if word in list_of_words:
            return list_of_words.count(word)
        else:
            return None
        
    def most_common_word(self):
        list_of_words = self.text.split()
        dic_of_words = {}
        largest_frequency = 0
        most_common = ""

        for word in list_of_words:
            dic_of_words[word] = self.word_frequency(word)

        for key, value in dic_of_words.items():
            if value > largest_frequency:
                largest_frequency = value
                most_common = key
        return most_common
    

    def unique_words(self):
        list_of_words = self.text.split()
        unique_set = set(list_of_words) 
        unique_list = list(unique_set)
        return unique_list
           
    @classmethod
    def from_file(cls, file_path):
        with open(f"{dir_path}\{file_path}", "r") as file:
            text = file.read()
            
        return cls(text)


class TextModification(Text):
    def __init__(self, text=""):
        super().__init__(text)

    def remove_punctuation(self):
        
        for char in self.text:
            if char in string.punctuation:
                self.text = self.text.replace(char, "")
        return self.text
    
    def remove_stop_words(self):

        stop_words = [
            "a", "about", "above", "after", "again", "against", "all", "am", "an", "and", "any", "are", "aren't", "as", "at",
            "be", "because", "been", "before", "being", "below", "between", "both", "but", "by",
            "can't", "cannot", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "don't", "down", "during",
            "each", "few", "for", "from", "further", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "he'd",
            "he'll", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's", "i", "i'd",
            "i'll", "i'm", "i've", "if", "in", "into", "is", "isn't", "it", "it's", "its", "itself", "let's", "me", "more",
            "most", "mustn't", "my", "myself", "no", "nor", "not", "of", "off", "on", "once", "only", "or", "other", "ought",
            "our", "ours", "ourselves", "out", "over", "own", "same", "shan't", "she", "she'd", "she'll", "she's", "should",
            "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then",
            "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to",
            "too", "under", "until", "up", "very", "was", "wasn't", "we", "we'd", "we'll", "we're", "we've", "were", "weren't",
            "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "who's", "whom", "why", "why's",
            "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself",
            "yourselves"
        ]

        list_of_words = self.text.split()
        new_list = []

        for word in list_of_words:
            if word in stop_words:
                pass
            else:
                new_list.append(word)
                
        nostop_string = " ".join(new_list)
        self.text = nostop_string
        return self.text

    def remove_special_characters(self):
        self.text = re.sub('[^A-Za-z0-9 ]+', '', self.text)
        return self.text
    
text = Text("hello how how are you you you im my fine was which how are whats up test")

print(text.word_frequency("hello"))
print(text.most_common_word())
print(text.unique_words())

text2 = Text().from_file("text.txt")
print(text2.text)
print(text2.most_common_word())

mod_text = TextModification("hello, how, !how you you ^^^^ you im fine ] ] because because because ^^^ against who1 who are a above after again against")
#print(mod_text.remove_punctuation())
#print(mod_text.remove_stop_words())
mod_text = TextModification.from_file("text.txt")
print(mod_text.remove_special_characters())