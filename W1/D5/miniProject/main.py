game_board = [["X", "A", "X"], 
              ["A", "A", "A"], 
              ["X", "A", "A"]]

diagonal_condition = []
vertical_condition = []
horizontal_condition = []

# win conditions 1 2 3
# 1 2 3
# 2 2 3
# 1 2 3

# we need to check each column and each row if x is there 
# index = 0
# so column[col][0]
# resul > 3

def main():
    
    print("Welcome to tic - tac - toe\nPlease make your move by entering column and row numbers")
    display_board(game_board)
    
    user_column = int(input("column "))
    user_row = int(input("row "))
    player = []
    
    ### check if column and rows are in valid range
    if user_column > 0 and user_column <= 3 and user_row >= 0 and user_row <= 3:
        user_column -= 1
        user_row -= 1
        player.extend([user_column, user_row])
        player_input(player)
    else:
        print("Your Input is out of range")

def display_board(game_board):
    for column in game_board:
        print('|'.join(column)) 
        print("—" * (len(column) + 2)) 
       

def player_input(player):
    column = player[0]
    row = player[1]
    
    ### check if space is empty
    if game_board[column][row] == " ":
        game_board[column][row] = "X"

    display_board(game_board)
    check_win(game_board, player)


def check_win(game_board, player):
        current_row = []
        diagonal_track_left = []
        diagonal_track_right = []
    
        #for loop in range 3 (lenght of our columns)
        for column in range(3):
            
            diagonal_track_left.append(game_board[column][column])
            diagonal_track_right.append(game_board[column][2 - column])
            
            
            if len(diagonal_track_left) == 3:
                if "XXX" == "".join(diagonal_track_left):
                    print("You won diagonal win")
                    break
                elif len(diagonal_track_right) == 3:
                    if "XXX" == "".join(diagonal_track_right):
                        print("You won diagonal win")
                        break
                    
                    
            #if every char in current column is the same, its a win condition
            if game_board[column][0] == game_board[column][1] == game_board[column][2]:
                print("You won column win")
                break
            
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