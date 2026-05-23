let people = [
    { name: "Ram", age: 25 },
    { name: "Sita", age: 22 },
    { name: "Hari", age: 30 }
];

/*
TODO: Create a function called findPersonByName that takes an array of people and a name, and returns the person object with that name.

Example:
findPersonByName(people, "Sita") ➞ { name: "Sita", age: 22 }
findPersonByName(people, "Hari") ➞ { name: "Hari", age: 30 }
*/

// function findPersonByName(peopleArray, name) {
//     // your code here
//     return peopleArray.filter((people) => name === people.name)
// }

// console.log(findPersonByName(people, "Sita"));

function findPersonByName(peopleArray, name) {
    // your code here
    for (let i = 0; i < peopleArray.length; i++) {
        if (peopleArray[i].name === name) {
            return peopleArray[i]
        }
    }
    return 'User not found'
}
// findPersonByName(people, "Sita")
console.log("User is: ", findPersonByName(people, "Sita"));
