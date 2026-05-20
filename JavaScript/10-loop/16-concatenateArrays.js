let fruits = ["apple", "banana"];
let vegetables = ["carrot", "potato"];

let numbers1 = [1, 2, 3];
let numbers2 = [4, 5, 6];

/*
TODO: Create a function called concatenateArrays that takes two arrays and returns a new array with elements from both.

Example:
concatenateArrays(fruits, vegetables) ➞ ["apple", "banana", "carrot", "potato"]
concatenateArrays(numbers1, numbers2) ➞ [1, 2, 3, 4, 5, 6]
*/




// return [...arrayOne,...arrayTwo]
// function concatenateArrays(arrayOne, arrayTwo) {
//     return arrayOne.concat(arrayTwo)
// }
// console.log(concatenateArrays(fruits, vegetables))

function concatenateArrays(arrayOne, arrayTwo) {
    arrayOne.forEach(element => {
        arrayTwo.push(element)
    });
    return arrayTwo
}
console.log(concatenateArrays(fruits,vegetables));
console.log(concatenateArrays(numbers1,numbers2));
