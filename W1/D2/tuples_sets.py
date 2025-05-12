# Tuples Imutable, there is no notion of an empty tuple
my_tuple = ("TLV",)
print(my_tuple)

#convert some other sequence into a tuple
my_tuple = tuple(range(11))
print(my_tuple)

passwords = ("abc", "cde", "123", "abc")
passwords.count("abc")

print(passwords.count("abc"))
print(passwords[1])


#workaround on how to change tuples:
temp_list = list(my_tuple)
temp_list.extend(["A", "B", "C"])
my_tuple = tuple(temp_list)
print(my_tuple)

#SETS: 
# NOT ordered: not possible to access by index
# DONT allow duplicated elements

set = set()
countries = {"israel", "usa", "brazil"}
names = {"shimon", "hanna," "israel"}

person_country = countries.intersection(names)
print(person_country)
