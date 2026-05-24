

// let dashboard = {
//     total: 100,
//     expired: 24,
//     out_of_stock: 20
// }

/*

TODO: CONVERT THE  VALUES OF ABOVE OBJECT TO NEPALI 
__________________________________________________________________________________________________

let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];


You may need these concepts
    number.toString()
    string.trim()
    string.split()
    loop
    function


__________________________________________________________________________________________________

OUTPUT SHOULD BE AS BELOW
dashboard = {
    total: "१००",
    expired: "२४",
    out_of_stock: "२०"
}
*/


let nepali_digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

let dashboard = {
    total: 100,
    expired: 24,
    out_of_stock: 20
}
// function engToNep() {
//     dashboard.total = `${dashboard.total.toString().split('').map((digit) => digit = nepali_digits[digit]).join('')}`
//     dashboard.expired = `${dashboard.expired.toString().split('').map((digit) => digit = nepali_digits[digit]).join('')}`
//     dashboard.out_of_stock = `${dashboard.out_of_stock.toString().split('').map((digit)=> digit= nepali_digits[digit]).join('')}`
// }
// engToNep()
// console.log(dashboard);




// function enToNepali(obj) {
//     obj.forEach(element => {
//         console.log(element.total.toString().split('').map((digit) => nepali_digits[digit]).join(''))
//     });
// }

function enToNepali() {
    for (const items in dashboard) {
        //    console.log(items);
        // console.log(dashboard[items].toString().split('').map((digit) => nepali_digits[digit]).join(''))
        dashboard[items] = dashboard[items].toString().split('').map((digit) => nepali_digits[digit]).join('')
    }
}
enToNepali()
console.log(dashboard);
// console.log(enToNepali());

