MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''


matrix = []
row = ""
alpha_char = ""

# step1
line_list = MATRIX_STR.split("\n")

for line in line_list:
    if len(line) > 1:
        matrix.append(list(line))
    
print(matrix)


# step2
# iterating over columns and rows
for column in range(len(matrix[0])):
    for row in range(len(matrix)):
        #Checking if char is alpha
        if matrix[row][column].isalpha():
            #saving to string
            alpha_char += matrix[row][column]
        else:
            #inserting space if char not alpha
            alpha_char += " "

print(alpha_char)