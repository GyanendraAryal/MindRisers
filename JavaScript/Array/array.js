// let arr = [1, 2, 3, 4]

// // Accessing values
// console.log(arr[2]) // 3

// // Assigning values
// arr[2] = 100
// console.log(arr); //[1,2,100, 4]

// // Lenght property-->
// console.log(arr.length)//4

let myArr = [5, 6, 7, 8, 9]

myArr.push("Apple")
// console.log(myArr);

let res = myArr.pop()
// console.log(res);
// console.log(myArr);

console.log(myArr.shift())
console.log(myArr);


myArr.unshift(200)
console.log(myArr);

console.log(myArr.indexOf(200))

console.log(myArr.includes(9))

myArr.find((item) => {
    console.log(item);
})