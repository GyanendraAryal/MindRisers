
const users = [
    {
        name: "Ram",
        percentage: 98
    },
    {
        name: "john",
        percentage: 65
    },
    {
        name: "sita",
        percentage: 80
    },
]


/* 
Score Range	Letter Grade
90 - 100	A
80 - 89.9	B
70 - 79.9	C
60 - 69.9	D 
Below 60	F 
*/


// TODO: add grade property to above users. for all of them.

function gradeProvider(array) {
    array.forEach((user) => {
        let grade;
        if (user.percentage < 60) {
            user.grade = 'F'
        } else if (user.percentage < 69.9) { // 60
            user.grade = 'D'
        }
        else if (user.percentage < 79.9) {
            user.grade = 'C'
        }
        else if (user.percentage < 89.9) { // 60
            user.grade = 'B'
        }
        else if (user.percentage < 100) { // 60
            user.grade = 'A'
        }
    })
    return array
}
result = gradeProvider(users)
console.log(result);
