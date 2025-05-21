#################
#JSON
import json
import os

#converting a dictionary to json

my_family = {
    "parents": ["Beth", "Jerry"],
    "children": ["Summer", "Morty"]
}

### json file creation from dict
dir_path = os.path.dirname(os.path.realpath(__file__))
with open(f"{dir_path}/family.json", "w") as f:
    json.dump(my_family, f)

### converting but not saving(using dumps instead of dump)
json_my_famyli = json.dumps(my_family)
print(json_my_famyli)

### convert a json to a dictionary

with open(f"{dir_path}/family.json", "r") as f:
    my_family_json = json.load(f)
print(my_family_json)


### convert a json string to a dictionary
parsed_family = json.loads(json_my_famyli)
print(parsed_family)