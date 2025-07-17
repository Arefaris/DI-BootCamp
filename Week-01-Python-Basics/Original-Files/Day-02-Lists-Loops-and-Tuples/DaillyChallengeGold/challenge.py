##bd = input("Whats your birthday? DD/MM/YYYY")
##bd = bd.split("/")
number_of_candles = 4 #bd[2][3]
candles = ""
bar = "___"
cake = """
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~"""

for i in range(number_of_candles+1):
    candles += "i"
candles = "___" + candles + "___"
cake = candles + cake
print(cake)
