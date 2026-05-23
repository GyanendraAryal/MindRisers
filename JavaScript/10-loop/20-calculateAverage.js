let numbers = [10, 20, 30, 40, 50];

/*
TODO: Create a function called calculateAverage that takes an array of numbers and returns their average.

Example:
calculateAverage(numbers) ➞ 30
calculateAverage([1, 2, 3]) ➞ 2
calculateAverage([5]) ➞ 5
*/

// function calculateAverage(arr) {
//     // your code here
//     arr.reduce((acc, next) => {
//         return sum = acc += next
//     }, 0);
//     return sum / arr.length
// }
function calculateAverage(arr) {
    //  your code here
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum

}

console.log(calculateAverage(numbers));
