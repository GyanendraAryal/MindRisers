let colors = ["red", "green", "blue", "yellow"];
let numbers = [10, 20, 30, 40, 50];

/*
TODO: Create a function called getFirstAndLast that takes an array and returns an object with 'first' and 'last' properties.

Example:
getFirstAndLast(colors) ➞ { first: "red", last: "yellow" }
getFirstAndLast(numbers) ➞ { first: 10, last: 50 }
*/


// let res = {}
// res = ({first:arr[1],last: arr[arr.length-1]})    
// return res;
// res = 


function getFirstAndLast(arr){
    return ({first:arr[0],last: arr[arr.length-1]})    
}
console.log(getFirstAndLast(colors))
console.log(getFirstAndLast(numbers))