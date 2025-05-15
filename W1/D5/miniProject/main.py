import random
game_board = [[" ", " ", " "], 
              [" ", " ", " "], 
              [" ", " ", " "]]


def main():
    
    print("Welcome to tic - tac - toe\nPlease make your move by entering column and row numbers")
    play()
    
def play():
    turn = ["CPU", "PLAYER"]
    turn = random.choice(turn)
    win = False
    player_symbol = "X"
    
    while win != True:
        player = []
        
        if turn == "CPU":
            player_symbol = "O"
            player_input(random.randint(0,2), random.randint(0, 2), player_symbol)
            turn == "PLAYER"
        else: 
            user_column = int(input("column "))
            user_row = int(input("row "))
            
            ### check if column and rows are in valid range
            if user_column > 0 and user_column <= 3 and user_row >= 0 and user_row <= 3:
                user_column -= 1
                user_row -= 1
                player_symbol = "X"
                player_input(user_column, user_row, player_symbol)
                turn == "CPU"
            else:
                print("Your input is out of range")
                
        win = check_win(game_board, player)
        display_board(game_board)
        
def check_for_tie(game_board):
    tie = 0
    
    for column in game_board:
        if " " not in column:
            tie += 1
    if tie == 3:
        return True
    else:
        return False
    
def display_board(game_board):
    for column in game_board:
        print('|'.join(column)) 
        print("—" * (len(column) + 2)) 
       

def player_input(column, row, symbol):
    
    ### check if space is empty
    if game_board[column][row] == " ":
        game_board[column][row] = symbol
    else: 
        print("not empty")

def check_win(game_board, player):
        current_row = []
        diagonal_track_left = []
        diagonal_track_right = []
        symbol = player[2]
        
        #for loop in range 3 (lenght of our columns)
        for column in range(3):
            
            #diagonal win condition check
            #saving and adding every diagonal char to check for win condition
            
            diagonal_track_left.append(game_board[column][column])
            diagonal_track_right.append(game_board[column][2 - column])
            
            
            if len(diagonal_track_left) == 3:
                if "XXX" == "".join(diagonal_track_left):
                    print("You won diagonal win")
                    return True
                elif len(diagonal_track_right) == 3:
                    if "XXX" == "".join(diagonal_track_right):
                        print("You won diagonal win")
                        return True
                    
                    
            #if every char in current column is the same, its a win condition
            if game_board[column][0] == symbol and game_board[column][1] == symbol and game_board[column][2] == symbol:
                print("You won column win")
                return True
            
            #iterating through rows. and saving every char in current row to a list
            for row_index, row in enumerate(game_board):
                    current_row.append(row[column])


            #checking if win condition is met
            if "XXX" == "".join(current_row):
                  print("You won! (row win)")
                  current_row.clear()
                  return True
            else:
                current_row.clear()
             

main()