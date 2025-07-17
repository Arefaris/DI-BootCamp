text = input("Text?")
mode = int(input("type 1 for encrypt, type 2 decrypt "))
cypher_text = ""
decypher_text = ""

if mode == 1:
    for letter in text:
        cypher_text += chr(ord(letter) + 3)
elif mode == 2:
    for letter in text:
        decypher_text += chr(ord(letter) - 3)

print(cypher_text)
print(decypher_text)