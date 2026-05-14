

let users = [
    {
        firstName: "john",
        lastName: "Doe",
        age: 10
    },
    {
        firstName: "Rajesh",
        lastName: "Hamal",
        age: 20
    },
    {
        firstName: "John",
        lastName: "Wick",
        age: 30
    },
]

/* 
TODO: create a function printUserDetails and re-use it for all users 

output should be as follows 
    name is john doe and age is 10.
    name is rajesh hamal and age is 20.
    name is john wick and age is 30.
*/

// function printUserDetails(array) {
//     array.map((item) => {
//         // console.log(item);    
//         console.log(`Name is ${item.firstName} and age is ${item.age}`);
//         // return `Name is ${item.firstName} and age is ${item.age}`
//     })
// }
// printUserDetails(users)
// const res =
// console.log(res);

users.forEach((index)=>{
    console.log(`Name is ${index.firstName} and age is ${index.age}`);
    // `Name is ${index.firstName} and age is ${index.age}`
})

