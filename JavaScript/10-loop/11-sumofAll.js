

function sum(...args) { //  change necessary parameters.
    return args.reduce((acc, num) => acc += num, 0)
}

console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3)) //6
console.log(sum(1, 2, 3, 4)) // 10



/* TODO: create a function is such a way that the function should handle all the arguements we pass to it.  */