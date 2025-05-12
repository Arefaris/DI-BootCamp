# LISTS 

#A list is sequence of elements

#Syntax 
some_list = list("item 1") #to convert other sequence in a list
other_list = ["item 1"] #the best way to creat an empty list

print(some_list)
print(other_list)

print(len(some_list))
print(some_list[1])

my_list = []
#methods_for_lists
my_list.append("A")
print()

#more than one element
my_list.extend(["B", "C", "D"])
print(my_list)


#ex1
#create an empty list called names and add 4 names of your favorite characters of some show
names = []
names.extend(["Jonh Snow", "Arya Stark", "Jaime Lannister", "Tyrion Lannister"])
print(names)


#range - three argumetns start, stop, step
num_list = list(range(1,8))
print(num_list)

#list slicing
print(num_list[2:6])


#list copiyng
copied_list = num_list[:]
print(copied_list)
copied_list = num_list.copy()


#ohter_methods
# insert(where, what)
# remove(what), removes the first occurence of the element

del num_list[3]
print(num_list)

#by default deletes the last element
poped_el = num_list.pop() 
print(poped_el)
print(num_list)

fruits = ["banana", "orange", "apple"]

#sorted() creates a sorted copy

sorted_fruits = sorted(fruits)
print(fruits)
print(sorted_fruits)

#sort() changes original list
fruits.sort()
print(fruits)

#index(element) returns index of the element

#ex2
list = [5, 10, 15, 20, 25, 50, 20]
#index = list.index(20)
#list.remove(20)
#list.insert(index, 200)
#print(list)

if 20 in list:
    index = list.index(20)
    list.remove(20)
    list.insert(index, 200)
    print(list)