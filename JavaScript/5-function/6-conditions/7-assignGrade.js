

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

/* TODO:
    add grade property to above users. for all of them.
*/


function calculateGrade(users) {
    //CODE here
    let grade;
    users.forEach((element) => {
        if (element.percentage >= 90) {
            element.grade = 'A'
        } else if (element.percentage >= 80 && element.percentage <= 89.9) {
            element.grade = 'B'
        } else if (element.percentage >= 70 && element.percentage <= 79.9) {
            element.grade = 'C'
        } else if (element.percentage >= 60 && element.percentage <= 69.9) {
            element.grade = 'D'
        } else {
            let grade = {}
            element.grade = 'F'
        }
    })
}
calculateGrade(users)
console.log(users)
/* 
    EXPECTED-OUTPUT on console.log(users)
    [
        {
            name:"Ram",
            percentage:98,
            grade:A
        },
        {
            name:"john",
            percentage:65,
            grade:D
        },
        {
            name:"sita",
            percentage:80,
            grade:B
        },
    ]
    
*/