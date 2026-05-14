/*
TODO: Create a function called getInitials that takes a person object with firstName and lastName, and returns their initials.

Example:
getInitials({ firstName: "Ram", lastName: "Shrestha" }) ➞ "RS"
getInitials({ firstName: "Sita", lastName: "Gurung" }) ➞ "SG"
*/

function getInitials(person) {
    // your code here
    return (`${person.firstName[0]}${person.lastName[0]}`)
}

console.log(getInitials({ firstName: "Ram", lastName: "Shrestha" }));
console.log(getInitials({ firstName: "Sita", lastName: "Gurung" }))