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
       
        print(turn)
        current_turn = turn
        if turn == "CPU":
            player_symbol = "O"
            placed = False
            
            #loop to check if space is free
            while not placed:
                col = random.randint(0, 2)
                row = random.randint(0, 2)
                if game_board[col][row] == " ":
                    player_input(col, row, player_symbol)
                    placed = True
            turn = "PLAYER"
            
        else: 
            user_column = input("column ")
            user_row = input("row ")

            if not (user_column.isdigit() and user_row.isdigit()):
                print("Invalid input. Please enter numbers.")
                continue

            user_column = int(user_column)
            user_row = int(user_row)
            
            ### check if column and rows are in valid range
            if user_column > 0 and user_column <= 3 and user_row >= 0 and user_row <= 3:
                user_column -= 1
                user_row -= 1
                player_symbol = "X"
                
                if game_board[user_column][user_row] == " ":
                    player_input(user_column, user_row, player_symbol)
                    turn = "CPU"
                else:
                    print("not empty")
                    continue
            else:
                print("Your input is out of range")
                continue
                
        tie = check_for_tie(game_board)        
        win = check_win(game_board, player_symbol)
        display_board(game_board)
        
        if win:
            print(f"{current_turn} wins the game!")
            break
        if tie:
            print("TIE, game over")
            break
        
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
    

def check_win(game_board, symbol):
        diagonal_track_left = []
        diagonal_track_right = []
        
        # xxx or ooo depending on CPU/PLAYER
        sequence = symbol + symbol + symbol 
        
        #for loop in range 3 (lenght of our columns)
        for column in range(3):
            
            #diagonal win condition check
            #saving and adding every diagonal char to check for win condition
            
            diagonal_track_left.append(game_board[column][column])
            diagonal_track_right.append(game_board[column][2 - column])
            
            
            if len(diagonal_track_left) == 3:
                if sequence == "".join(diagonal_track_left):
                    return True
                elif len(diagonal_track_right) == 3:
                    if sequence == "".join(diagonal_track_right):
                        return True
                    
            #if every char in current column is the same, its a win condition
            if game_board[column][0] == symbol and game_board[column][1] == symbol and game_board[column][2] == symbol:
                return True
            
            #iterating through rows. and saving every char in current row to a list
            for row in game_board:
                if row[0] == symbol and row[1] == symbol and row[2] == symbol:
                    return True

main()
