#ex 1
student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

student_averages = {}
class_average = []

for student, grades in student_grades.items():
    #getting the average
    average = sum(grades) / len(grades)
    average = int(average)

    #adding each average to a list to calculate class average afterwards
    class_average.append(average)
    if average >= 90:
        student_averages[student] = "A"
    elif average >= 80 and average <= 89:
        student_averages[student] = "B"
    elif average >= 70 and average <= 79:
        student_averages[student] = "C"
    elif average >= 60 and average <= 69:
        student_averages[student] = "D"
    elif average < 60:
        student_averages[student] = "F"

# getting class average
class_average = sum(class_average) / len(class_average)
print(f"Class average is {class_average}")
# printing each student average
for student, average in student_averages.items():
    print(f"{student} average is {average}")

#ex 2
sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

smartphones_sales = 0
laptop_sales = 0
headphones_sales = 0

customer_spendings = {}

for sale in sales_data:

    if sale["product"] == "Smartphone":
        smartphones_sales += sale["quantity"]
    elif sale["product"] == "Laptop":
        laptop_sales =+ sale["quantity"]
    elif sale["product"] == "Headphones":
        headphones_sales += sale["quantity"]

    if sale["customer_id"] not in customer_spendings:
        customer_spendings[sale["customer_id"]] = sale["price"]
    else:
        customer_spendings[sale["customer_id"]] += sale["price"]

    sale["total_price"] = sale["price"] * sale["quantity"]
    



print(f"Smartphone sales are {smartphones_sales}")
print(f"Laptop sales are {smartphones_sales}")
print(f"Headphones sales are {smartphones_sales}")
print(sales_data)