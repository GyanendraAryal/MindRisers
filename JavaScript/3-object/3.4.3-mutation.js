let person = {
    firstName: "Hari",
    lastName: "Kumar",
    contact: {
        ncell: 9808000000,
        ntc: 9851000000
    }
    
}

/* TODO: 

    In above person,  we donot have address field, add an address field having street and ward

*/


/* 
        CODE HERE
*/
person.address = {}
// person.address.street;
person.address.street = "st-2"
person.address.ward = 3

console.log(person)
/* 
    Output: 
    {
    firstName: "Hari",
    lastName: "Kumar",
    contact: {
        ncell: 9808000000,
        ntc: 9851000000
    },
    address: {
        street: "putalisadak",
        ward: 16
    }
}

*/



