let user_1 = {
    name: "John",
    address: "kathmandu",
    role: "admin",
};

let user_2 = {
    name: "ram",
    address: "chitwan",
    role: "guest",
};

function checkAdminAccess(user) {
    if (user.name === 'John' && user.role === 'admin') {
        console.log(`${user.name} can create-delete the users`);
    } else {
        console.log(`${user.name} can create-delete the users`);
    }
}
checkAdminAccess(user_2)
/*  
    TODO: create a function checkAdminAccess and pass the user as arguement to it

    EXPECTED-OUTPUT:
    
    checkAdminAccess(user_1) // john can create-delete the users
    checkAdminAccess(user_2) // ram can not create-delete the users

*/


