let person1 = {
  firstName: "Ram",
  lastName: "Shrestha"
};

let person2 = {
  firstName: "Sita",
  lastName: "Gurung"
};

/*
TODO: Create a function called getFullName that takes a person object and returns their full name.

Example:
getFullName(person1) ➞ "Ram Shrestha"
getFullName(person2) ➞ "Sita Gurung"
*/

const person = (user)=>{
  return `${user.firstName} ${user.lastName}`
}
console.log(person(person1));
console.log(person(person2));
