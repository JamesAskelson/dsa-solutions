var countStudents = function(students, sandwiches) {
    let count = 0;

    while(students.length){

        let student = students.shift()
        if(student === sandwiches[0]){
            sandwiches.shift()
            count = 0
        } else {
            students.push(student)
            count++
        }
        if(count === students.length){
            break;
        }
    }

    return students.length
};
