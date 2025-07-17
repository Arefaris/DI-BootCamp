import os 

#File i/o - input/ output 
# Old scholl way of opening a file with python

"""file_object = open(r"./secrets.txt")
print(file_object)"""

# modern python way 

"""with open(r"./secrets.txt", encoding="utf-8") as file_obj:
    #output = file_obj.read() # returns the whole content of the file
    #output = file_obj.readline() # returns one line
    #output = file_obj.readlines() #return a list where each line is an element
    print(output)
    //"""

"""with open(r"./starwars.txt", encoding="utf-8") as sw_f:
    #output = file_obj.read() # returns the whole content of the file
    #output = file_obj.readline() # returns one line
    #output = file_obj.readlines() #return a list where each line is an element
    #print(output)
    #lineslist = output.split("\n")
    #print(lineslist[5])
    while True:
        line = sw_f.readline()
        if not line:
            break
        #print(line)"""

#WRITING ON THE FILE
dir_path = os.path.dirname(os.path.realpath(__file__))
"""with open(f"{dir_path}/secrets.txt", "a", encoding="utf-8") as sec_file:
    #  we can define the mode: "w" to write abd delete what was in the file before
    #  "a" to append a new 
    names = ["frodo \n", "pippin \n", "Sam \n"]
    sec_file.writelines(names)
    print(sec_file)
"""
with open(f"{dir_path}/starwars.txt", "a+", encoding="utf-8") as sec_file:
    sec_file.seek(0)
    output = sec_file.readlines()
    for line in output:
        if line == "Luke\n":
            line = "SkyWalker " + line
            print(line)
        else:
            print(line)

