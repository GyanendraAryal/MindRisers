let courses = ["mern", "python", "qa"];

/* TODO: Create a function that takes an array and returns the first element. 
    exmple.

    getFirstElement(courses) // EXPECTED-OUTPUT : mern
*/

function returnFirstElement(arr){
    // console.log(`${arr[0]}`);
    return `${arr[0]}`
}
const res = returnFirstElement(courses)
console.log(res);
