    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        count = 0
        while students:
            student = students.pop(0)
            if student == sandwiches[0]:
                sandwiches.pop(0)
                count = 0
            else:
                students.append(student)
                count = count+1
            if count == len(students):
                break
        return len(students)
