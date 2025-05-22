import random

class Game:
    def __init__(self):
        pass

    def get_user_item(self):
        valid_items = ["rock", "paper", "scissors"]
        user_in = input("Select an item (rock/paper/scissors) ").lower()
        userLen = user_in.split()

        if len(userLen) > 1:
            raise ValueError("Only one value is allowed")
        
        
        return "".join(user_in)

    
    def get_computer_item(self):
        
        items = ["rock", "paper", "scissors"]
        choise = random.choice(items)
        return choise
    
    def get_game_result(self, user_item, computer_item):

        win_conditions = {"rock": ["scissors"], "paper": ["rock"], "scissors": ["paper"]}

        if computer_item in win_conditions[user_item]:
            return "win"
        elif user_item in win_conditions[computer_item]:
            return "loss"
        else:
            return "draw"
    
    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"User choise {user_item}, Computer choose {computer_item}")

        if result == "win":
            print("User has won!")
        elif result == "loss":
            print("Computer has won!")
        else:
            print("Its a draw!")
        return result
    