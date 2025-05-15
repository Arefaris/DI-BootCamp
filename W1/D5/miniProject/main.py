game_board = [["A", "X", "A"], 
              ["A", "X", "O"], 
              ["X", "X", "X"]]

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
        #print(game_board)
        index = 0
        done = False

        for col_index, column in enumerate(game_board):
         
            if (column[0] == column[1] == column[2]):
                print("Congrats, you won! (horizontal)")
                done = True
                
           
            diagonal_condition.append(column[col_index])
            if len(diagonal_condition) == 3:
                result = ''.join(diagonal_condition)

                if result == "XXX":
                    print("Congrats, you won! (diagonal)")
                    break

            for row_index, row in enumerate(game_board[col_index]):

                vertical_condition.append(row)
                print(row)
                print("...")

                if len(vertical_condition) == 3:
                    result = ''.join(vertical_condition)

                    if result == "XXX":
                        print("Congrats, you won! (vertical)")
                        done = True
                        vertical_condition.clear()
                        break
                    elif result:
                        vertical_condition.clear()
            if done:
                break

            

main()