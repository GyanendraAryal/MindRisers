/*
TODO: Create a function called createUser that takes name, age, and email, and returns a user object with those properties.

Example:
createUser("Ram", 25, "ram@email.com") ➞ { name: "Ram", age: 25, email: "ram@email.com" }
createUser("Sita", 22, "sita@email.com") ➞ { name: "Sita", age: 22, email: "sita@email.com" }
*/

let users = {}
function createUser(name,age,email){
    users = ({name:name,age:age,email:email})
    return users
}
console.log(createUser("Gyanendra",19,"test@gmail.com"));
console.log(createUser("Sita", 22, "sita@email.com"));

