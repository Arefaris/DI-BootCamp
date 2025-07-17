def hello(language):
    if language == "mother":
        print("Привет")
    elif language == "hebrew":
        print("שלום")
    

hello("hebrew")


# create a function called country_info that receives a country as argument 
# and prints the capital of that country. Make the country name argument default
# Baku

def country_infro(name = "Naboo"):
    if name == "Naboo":
        print("Theed")
    elif name == "Spain":
        print("Madrid")
    elif name == "Ukraine":
        print("Kiiv")

country_infro("Ukraine")