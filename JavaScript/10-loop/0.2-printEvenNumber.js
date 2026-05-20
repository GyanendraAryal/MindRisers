// print even number between 22 to 55


/* output:
    24
    26
    28
    .
    .
    .
    .
    50
    52
    54
    
*/

const evenNumbers = (start, end) => {
    for (let i = start; i < end; i++) {
        console.log(i % 2 === 0 ? `${i}` : ``)
    }
}
evenNumbers(24, 55)