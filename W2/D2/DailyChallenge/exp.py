import math
class Pagination():
    def __init__(self, items = None, page_size = 10):
        self.items = items
        self.page_size = page_size
        #current index
        self.current_idx = 0
        #total number of pages
        self.total = math.ceil(len(self.items) / self.page_size)

        if items == None:
            self.items = []
        pass

    def get_visible_items(self):
        #multiplying current index on page size to display page
        start = self.current_idx * self.page_size
        return self.items[start:start + self.page_size]
       
      
            
    def go_to_page(self, page_num):
        self.current_idx = page_num - 1
        if page_num < 1 or page_num > self.total:
            raise ValueError("Page is out of range")
        self.current_idx = page_num - 1
        return self.get_visible_items()
        
    def first_page(self):
        return self.go_to_page(1)

    def last_page(self):
        return self.go_to_page(self.total)
    
    def next_page(self):
        #if we are on the last page we stay
        if self.current_idx + 1 >= self.total:
            return self.get_visible_items()
        # going for the next page
        return self.go_to_page(self.current_idx + 2)
    
    def previous_page(self):
        if self.current_idx == 0:
            return self.get_visible_items()
        return self.go_to_page(self.current_idx)

    def __str__(self):
        visible = self.get_visible_items()
        lines = []
        for item in visible:
            lines.append(str(item))
        result = "\n".join(lines)
        return result
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.get_visible_items())
# ['a', 'b', 'c', 'd']

p.next_page()
print(p.get_visible_items())
# ['e', 'f', 'g', 'h']

p.last_page()
print(p.get_visible_items())
# ['y', 'z']

#p.go_to_page(10)
print(p.current_idx + 1)
# Output: 7

#p.go_to_page(0)
# Raises ValueError