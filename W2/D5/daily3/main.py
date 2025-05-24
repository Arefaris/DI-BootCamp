#ex 1
# A class is a template for creating objects (like a blueprint).
# An instance is a specific object created from a class.
# Encapsulation means hiding the internal data and only allowing access through methods.
# Abstraction means showing only the important things and hiding the details.
# Inheritance means a class can get features (methods/variables) from another class.
# Multiple inheritance means a class can inherit from more than one parent class.
# Polymorphism means using the same method name for different types of objects.
# MRO (Method Resolution Order) is the order in which Python looks for a method when there are multiple classes.

#ex 2
import random
class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value
        pass
    
class Deck:
    def __init__(self):
        self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.deck = self.create_deck()
        pass
    
    def create_deck(self):
        deck = []
        for suit in self.suits:
            for value in self.values:
                deck.append(Card(suit, value))
        return deck
    
    def shuffle(self):
        #making sure all 52 cards are present
        if len(self.deck) != 52:
            print("Deck is incomplete!")
        random.shuffle(self.deck)
            
        
    def deal(self):
        if len(self.deck) == 0:
            print("No more cards to deal.")
            return None
        return self.deck.pop()    
        
                  
            
    
deck = Deck()
deck.shuffle()
card = deck.deal()
print(card.suit, card.value)

