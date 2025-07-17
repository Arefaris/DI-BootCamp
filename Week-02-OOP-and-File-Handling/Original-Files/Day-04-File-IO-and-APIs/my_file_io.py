

#FILE I/O - INPUT/ OUTPUT

#OLD SCHOOL WAY OF OPENING A FILE WITH PYTHON
# file_object = open(r'C:\Users\julia\OneDrive\Desktop\DI-Bootcamp-april2025\W2\D4\file_io.py')
# print(file_object)

#MODERN PYTHON WAY (AUTOMATICALLY CLOSED)
# with open(r'C:\Users\julia\OneDrive\Desktop\DI-Bootcamp-april2025\W2\D4\secrets.txt', encoding='utf-8') as file_obj:
#     #READING METHODS: the default mode of open()

#     output = file_obj.read() #returns the whole content of the file
#     output = file_obj.readline() #returns one line
#     output = file_obj.readlines() #returns a list where each line is an element
#     print(output)

    #WRITING ON THE FILE
import os

dir_path = os.path.dirname(os.path.realpath(__file__))

with open(f'{dir_path}/secrets.txt', 'a', encoding='utf-8') as file_obj:
    #we can define the mode: 'w' to write and delete what was in the file before
    # 'a' to append a new line to the file
    
    names = ['Aragorn \n', 'Gandalf\n', 'Saruman\n']
    file_obj.writelines(names)
    print('names added sucessfully')



