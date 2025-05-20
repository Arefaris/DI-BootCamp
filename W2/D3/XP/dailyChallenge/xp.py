import math

class Circle:
    def __init__(self, radius = None, diameter = None):
        #we are using not none because 0 or 0.0 are false in python
        if radius is not None:
            self.radius = radius
            self.diameter = 2 * radius
            self.diameter = diameter
        elif diameter is not None:
            self.diameter = diameter
            self.radius = diameter / 2
        else:
            raise ValueError("You must provide either radius or diameter.")
        self.area = self.circle_area()

    def circle_area(self):
        if self.radius is not None:
            area = math.pi * self.radius ** 2
        elif self.diameter is not None:
            area = math.pi * (self.diameter / 2) ** 2
        return area
    
    def __str__(self):
        if self.radius:
            return f"Circle Radius = {self.radius}, cirle area = {self.area}"
        elif self.area:
            return f"Circle Diameter = {self.radius}, cirle area = {self.area}"
    
    def __add__(self, other):
        new_area = self.area + other.area
        new_radius = math.sqrt(new_area / math.pi)
        return Circle(new_radius)
    
    def __lt__(self, other):
        if self.area < other.area:
            return True
        else:
            return False
        
    def __gt__(self, other):
        if self.area > other.area:
            return True
        else:
            return False
        
    def __eq__(self, other):
        if self.area == other.area:
            return True
        else:
            return False
        
    def __repr__(self):
        if self.radius:
            return f"Circle Radius = {self.radius}, cirle area = {self.area}"
        elif self.area:
            return f"Circle Diameter = {self.radius}, cirle area = {self.area}"
        
circle1 = Circle(5)
circle2 = Circle(6)
circle3 = circle1 + circle2
print(circle3)
print(circle2 > circle1)
print(circle1 == circle1)
lis = []
lis.append(circle2)
lis.append(circle1)
print(sorted(lis))