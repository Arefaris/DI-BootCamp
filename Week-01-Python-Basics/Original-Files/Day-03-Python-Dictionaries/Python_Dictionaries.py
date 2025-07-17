user_a = {
    'first_name': 'Bob',
    'last_name': 'Ross', #STOP HERE, EXPLAIN
    'age': 53, #EXPLAIN DATA TYPES AS VALUES
    'address': 'Tel Aviv', #STOP HERE EXPLAIN ACESSING DATA
    'hobbies': ['painting', 'guitar'], #STOP HERE EXPLAIN DATA TYPES: DICTS AND LISTS
    'pets': [('Rufus', 9), ('Garfield', 8)], #EXPLAIN LIST OF OTHER DATA TYPES (EX.:TUPPLES)
    'family': {'partner':{
        'first_name': 'Lior', 
        'last_name': 'Alon', 
        'age': 50
        },
        'children':{
        'first_name': 'Anna', 
        'last_name': 'Ross', 
        'age': 15,
        'sports': ['volleyball', 'soccer']
        },
    }
}

user_a['first_name_2'] = user_a.pop('first_name')

print(user_a)

print(user_a['first_name'])
print(user_a['hobbies'][1])
print(user_a['pets'][2][0])


for pet in user_a['pets']:
    print(pet[0])

print(user_a['family']['partner']['last_name'])
print(user_a['family']['children']['sports'][0])
print(user_a['family'])



print('first_name' in user_a)
print('Rufus' in user_a.values())
print(53 == user_a['age'])

print('keys: ', user_a.keys())
print('values: ', user_a.values())

print(user_a.items())

print(user_a['family']['partner']['first_name'])
print(user_a['family']['children']['sports'][0])


shirts = [                  #A list of dicts
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

# 4 Modufy An Entry In A Dict
# setting new value for a key
user_a['first_name'] = 'John'
print('changed first name: ', user_a)

# 5. Adding An Entry To An Existing Dictionary
user_a['email'] = 'bob@gmail.com'
print('email added: ', user_a)

# 6. Delete An Entry In A Dictionary

# Deleting (without removal) values by key - 'del' keyword
del user_a['last_name']
print('deleted last name: ', user_a)

# Popping values by key
name_removed = user_a.pop('first_name')

print(user_a)
print("Name removed:",name_removed)

# The IN keyword
print('Tel Aviv' in user_a.values())
print('Tel Aviv' == user_a['address'])
print('first_name' in user_a)

shirts = [                  #A list of dicts
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'S',
    'price': 20
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'M',
    'price': 25
  },
  {
    'name': 'Awesome T-shirt 3000',
    'size': 'L',
    'price': 30
  },
]

for shirt in shirts:
  print(shirt['size'])

# Build-in Methods
print(user_a.items())
for key, value in user_a.items():
   print(f'k: {key} -> v: {value} ')

# dictionary keys
print('keys: ', user_a.keys())
