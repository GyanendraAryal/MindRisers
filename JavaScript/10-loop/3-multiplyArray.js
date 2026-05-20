let numbers = [2, 3, 4, 5];

/*
TODO: Create a function called multiplyArray that takes an array of numbers and returns their product (all multiplied together).

Example:
multiplyArray(numbers) ➞ 120
multiplyArray([1, 2, 3]) ➞ 6
multiplyArray([10]) ➞ 10
*/

function multiplyArray(arr) {
    // your code here
    let initialVal = 1
    result = arr.reduce((acc, next) => {
        return acc = next * acc
    }, [initialVal])
    return result
}

console.log(multiplyArray(numbers));
