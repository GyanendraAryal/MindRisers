// let users = [];
// function addNewUser(name, age, address) {
//     return users.push(
//         {
//             name: name,
//             age: age,
//             address: address
//         }
//     )
// }

// addNewUser("ram", 21, "kapan");
// addNewUser("shyam", 22, "bagbazar");
// addNewUser("hari", 22, "jamal");
// console.log(users)


let users = [];
let count = users.length

function addNewUser(name, age, address) {
    // users[users.length] = { name, age, address, }
    users[count] = { name, age, address, }
    count = users.length
}
// console.log(count);

addNewUser("ram", 21, "kapan");
addNewUser("shyam", 22, "bagbazar");
addNewUser("hari", 22, "jamal");
console.log(users)

/* 
    EXPECTED-OUTPUT:
    [
        { name: 'ram', age: 21, address: 'kapan' },
        { name: 'shyam', age: 22, address: 'bagbazar' },
        { name: 'hari', age: 22, address: 'jamal' }
    ]
*/
