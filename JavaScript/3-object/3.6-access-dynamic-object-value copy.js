

let person = {
    first_name: "john",
    last_name: "doe",
    age: 29,
    website: "https://www.johndoe.com"
}

let fieldToRetrive = 'website'
/* 
    using  fieldToRetrive variable, access the value of person object
        if fieldToRetrive is first_name, OUTPUT  should be john
        if fieldToRetrive is website, OUTPUT  should be https://www.johndoe.com

*/

console.log(person[fieldToRetrive]) //  what value does this print ??--undefined
// console.log(person.website) // https://www.johndoe.com       // THIS IS NOT WHAT I AM EXPECTING YOU TO WRITE


// console.log(fieldToRetrive.website)  // TODO: CHANGE THIS LInE OF CODE           // EXPECTED-OUTPUT:  https://www.johndoe.com
