from anagram_checker import AnagramChecker

def main():
    anagram_check = AnagramChecker()
    print("Welcome to the anagram Checker")
    
    while True:
        original_input = input("Please enter a word or q to exit ").lower()
        user_input = original_input

        if user_input == "q":
            break
        words = user_input.split()

        if len(words) > 1:
            print("Input contains more than one word")
            continue
        
        user_input = user_input.strip()

        if not user_input.isalpha():
            print("Only alphabetic characters are allowed. No numbers or special characters.")
            continue
        
        if not anagram_check.is_valid_word(user_input):
            print("❌ Not a valid English word.")
            continue
        
        anagrams = anagram_check.get_anagrams(user_input)
        print(f"YOUR WORD: {original_input}\nthis is a valid English word\nAnagrams for your word: {', '.join(anagrams)}")
main()