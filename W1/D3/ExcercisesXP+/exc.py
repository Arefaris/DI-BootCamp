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