from game import Game
results = {"win": 0, "loss": 0, "draw": 0}

def main():
     
     while True:
          choise = get_user_menu_choice()
          
          if choise == 3:
               print_results(results)
               print("Thank you for playing!")
               break
          elif choise == 1:
               game = Game()
               result = game.play()
               results[result] = results[result] + 1
          elif choise == 2:
               print_results(results)


def get_user_menu_choice():
        choise = 0
        try:
            choise = int(input("1.Play a new game\n2.Show scores\n3.Quit\nType number: "))
        except ValueError:
            print("Please type a number")

        if choise > 3 or choise < 1:
            print("Please type a number in range 1-3")

        return choise

 
def print_results(results):
        print(f"Wins: {results['win']}\nLosses: {results['loss']}\nDraws: {results['draw']}")
        

if __name__ == "__main__":
    main()