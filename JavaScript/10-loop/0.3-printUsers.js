let users = ["ram", "hari", "shyam", "gita"];

// there may be hundreds of users.
// print the users  and count the total number of users.

/* OUTPUT
    ram
    hari
    shyam
    gita


    total users: 4

*/
function printUsers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    return arr.length
}
let usersCount = printUsers(users)
console.log(`Number of users are: `, usersCount);
