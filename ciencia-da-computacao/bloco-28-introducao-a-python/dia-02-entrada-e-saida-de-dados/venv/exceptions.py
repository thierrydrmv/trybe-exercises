# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")

file = open("students.txt", mode="r")
content = file.read()
print(content)
file.close()


ontrack = []
with open("students.txt") as grades_file:
    for line in grades_file:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            ontrack.append(student_grade[0] + "\n")


with open("approved_students.txt", mode="w") as recu_students_file:
    print(ontrack)
    recu_students_file.writelines(ontrack)
file.close()
