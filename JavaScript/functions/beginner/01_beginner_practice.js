// # Practice Set 1 — Beginner
// > Topic: Function Basics, Parameters, Return Values

// ## Reflection Questions (write answers in comments)
// 1. What is the difference between a parameter and an argument?
// Parameter is what function takes a placeholder and argument is what user provides 
// 2. What does a function return if you forget to write `return`?
// undefined
// 3. Why might you use a default parameter?
// if we forgot to give value the progam doesnot crash


// ## Problem 1 — Say Hello
// Write a function `sayHello` that takes a `name` parameter and returns:
// `"Hello, <name>! Welcome."`
// ```js
// // Your code here
// // Test cases (should print true):
// console.log(sayHello("Gyanendra") === "Hello, Gyanendra! Welcome.");
// console.log(sayHello("Alice") === "Hello, Alice! Welcome.");


// Soution-1

function sayHello(name) {
  return (`Hello, ${name}! Welcome.`)
}
// console.log(sayHello("Gyanendra"));
// console.log(sayHello("Gyanendra")==="Hello, Gyanendra! Welcome.");


// ## Problem 2 — Circle Area
// Write a function `circleArea(radius)` that returns the area of a circle.
// Formula: π × r²  (use `Math.PI`)
// // Your code here
// // Test cases:
// console.log(Math.abs(circleArea(7) - 153.938) < 0.01);  // true
// console.log(Math.abs(circleArea(1) - 3.14159) < 0.001); // true

const PI = 3.14
function circleArea(radius) {
  return (PI * (radius * radius))
}
// console.log(circleArea(7));
// console.log(circleArea(7)-153.938 < 0.01);




// ## Problem 3 — Temperature Converter
// Write two functions:
// - `celsiusToFahrenheit(c)` → returns `(c × 9/5) + 32`
// - `fahrenheitToCelsius(f)` → returns `(f − 32) × 5/9`
// // Your code here
// // Test cases:
// console.log(celsiusToFahrenheit(0) === 32);     // true
// console.log(celsiusToFahrenheit(100) === 212);  // true
// console.log(fahrenheitToCelsius(32) === 0);     // true

function celsiusToFahrenheit(celsius) {
  // return (((celsius * 9 / 5) + 32))
}
function fahrenheitToCelsius(fahrenheit) {
  // return (((fahrenheit - 32) * 5 / 9))
}
// console.log(celsiusToFahrenheit(0) === 32);
// console.log(fahrenheitToCelsius(32) === 32);
// console.log(celsiusToFahrenheit(32) === 32);

// ## Problem 4 — Max of Three
// Write a function `maxOfThree(a, b, c)` that returns the largest of three numbers.
// Do NOT use `Math.max`.

// // Test cases:
// console.log(maxOfThree(3, 7, 5) === 7);    // true
// console.log(maxOfThree(10, 2, 9) === 10);  // true
// console.log(maxOfThree(4, 4, 4) === 4);    // true

function maxOfThree(a, b, c) {
  if (a > b && a > c) {
    return `Max is ${a}`
  } else if (b > a && b > c) {
    return `Max is ${b}`
  } else {
    return `Max is ${c}`
  }
}
// console.log(maxOfThree(5,123,12));

// ## Problem 5 — Is Palindrome
// Write a function `isPalindrome(str)` that returns `true` if the string reads
// the same forward and backward (case-insensitive), `false` otherwise.

// // Your code here
// // Test cases:
// console.log(isPalindrome("racecar") === true);   // true
// console.log(isPalindrome("Madam") === true);     // true
// console.log(isPalindrome("hello") === false);    // true
// console.log(isPalindrome("A") === true);         // true

function isPalindrome(str) {
  let reverse = ''
  for (let index = str.length - 1; index >= 0; index--) {
    reverse += str[index];
  }
  return str === reverse
}
// console.log(isPalindrome("hi"));
// let str = 'herl'
// console.log(str.length + 1);


// ## Problem 6 — Default Parameter Practice
// Write a function `makeGreeting(name, greeting = "Namaste")` that returns:
// `"<greeting>, <name>!"`

// // Your code here

// // Test cases:
// console.log(makeGreeting("Ram") === "Namaste, Ram!");         // true
// console.log(makeGreeting("Sita", "Hello") === "Hello, Sita!"); // true

function makeGreeting(name, greeting = "Hello") {
  return `${greeting}, ${name}!`
}
// console.log(makeGreeting("Ram","Namasteee")==="Namasteee, Ram!");
// console.log(makeGreeting("Sita") === "Hello, Sita!");


// ## Problem 7 — Count Vowels
// Write a function `countVowels(str)` that returns the number of vowels (a, e, i, o, u)
// in a string (case-insensitive).

// // Your code here
// // Test cases:
// console.log(countVowels("hello") === 2);       // true
// console.log(countVowels("AEIOU") === 5);       // true
// console.log(countVowels("rhythm") === 0);      // true
// console.log(countVowels("Gyanendra") === 4);   // true

function countVowels(str) {
  // let vowels = ['a', 'e', 'i', 'o', 'u']
  let count = 0;
  let vowels = 'aeiou'
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count += 1;
    }
  }
  return count;
}
// console.log(countVowels('ahgdfgh'));
// let s = 'eyta'
// let has = 'jfa f'
// console.log(s.includes(has[2]))


// ## Problem 8 — Arrow Function Rewrite
// Rewrite this function as a one-line arrow function:
// function square(n) {
//   return n * n;
// }

// // Your arrow function here:
// const square = 
// // Test cases:
// console.log(square(5) === 25);   // true
// console.log(square(0) === 0);    // true
// console.log(square(-3) === 9);   // true

const square = (n) =>{
  return (n*n)
}
console.log(square(5));
console.log(square(6));
console.log(square(7));
