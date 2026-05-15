// # Practice Set 2 — Intermediate
// > Topic: Scope, Closures, Higher-Order Functions, Rest/Spread
// > Difficulty: ⭐⭐⭐☆☆
// > Est. Time: 60–90 minutes


// ## Problem 6 — HOF: Build Your Own Reduce
// Implement `myReduce(arr, fn, initialValue)` from scratch.

// Your code here


// // Test cases:
// console.log(myReduce([1,2,3,4], (acc, x) => acc + x, 0) === 10);
// console.log(myReduce([1,2,3,4], (acc, x) => acc * x, 1) === 24);
// console.log(myReduce(["a","b","c"], (acc, x) => acc + x, "") === "abc");
// ```

// ---

// ## Problem 7 — Rest Parameters
// Write a function `stats(...nums)` that returns an object with:
// - `min`: smallest number
// - `max`: largest number
// - `sum`: total
// - `avg`: average (rounded to 2 decimal places)

// ```js
// // Your code here


// // Test cases:
// const result = stats(3, 1, 4, 1, 5, 9, 2, 6);
// console.log(result.min === 1);    // true
// console.log(result.max === 9);    // true
// console.log(result.sum === 31);   // true
// console.log(result.avg === 3.88); // true
// ```


// ---

// ## Problem 8 — Memoization (Caching)
// Write a function `memoize(fn)` that wraps any function and caches its results.
// If the same argument is passed again, return the cached result instead of recomputing.

// ```js
// // Your code here


// // Test:
// let callCount = 0;
// function slowSquare(n) {
//   callCount++;
//   return n * n;
// }

// const fastSquare = memoize(slowSquare);
// console.log(fastSquare(5) === 25);  // true
// console.log(fastSquare(5) === 25);  // true (from cache)
// console.log(fastSquare(6) === 36);  // true
// console.log(callCount === 2);       // true — slowSquare called only twice!
// ```

// ---

// ## Problem 9 — Compose
// Write a function `compose(f, g)` that returns a new function h where:
// `h(x)` = `f(g(x))`

// Then write `composeAll(...fns)` that chains any number of functions right-to-left.

// ```js
// // Your code here


// // Test cases:
// const double = x => x * 2;
// const addOne = x => x + 1;
// const square = x => x * x;

// const doubleThenAddOne = compose(addOne, double);
// console.log(doubleThenAddOne(5) === 11); // true

// const pipeline = composeAll(addOne, double, square); // square → double → addOne
// console.log(pipeline(3) === 19); // (3²=9) → (9*2=18) → (18+1=19)
// ```

// ---

// ## Reflection Questions
// 1. What is a closure? Give a real-world analogy.
// 2. What makes a function "higher-order"?
// 3. Why is memoization useful? What is its tradeoff?


let x = "global";

function outer() {
  let x = "outer";

  function inner() {
    let x = "inner";
    // console.log(x); // Q1: ??? - inner
  }

  inner();//-- inner
  // console.log(x); // Q2: ??? -- outer
}

// outer();// - outer
// console.log(x); // Q3: ??? -- global


// ## Problem 2 — Build a Counter with Closure
// Create a function `makeCounter(start = 0)` that returns an object with:
// - `increment()` → increases count by 1, returns new count
// - `decrement()` → decreases count by 1, returns new count
// - `reset()` → resets to start value, returns start value
// - `value()` → returns current count
// // Your code here


// // Test cases:
// const c = makeCounter(10);
// console.log(c.value());       // 10
// console.log(c.increment());   // 11
// console.log(c.increment());   // 12
// console.log(c.decrement());   // 11
// console.log(c.reset());       // 10
// console.log(c.value());       // 10


function makeCounter(start){
  let count = start;
  let counter = {
    value: function(){
      return start;
    },
    reset: function(){
      return start = 0;
    },
    increment: function(){
      return count += 1;
    },
    decrement: function(){
      return count -= 1
    }
  }
  return counter;
}
const c = makeCounter(10)
// console.log(c.value());
// console.log(c.reset());
// console.log(c.increment());
// console.log(c.decrement());


// ## Problem 3 — Function Factory
// Write a function `makeAdder(x)` that returns a new function.
// The returned function should take `y` and return `x + y`.

// // Test cases:
// const add5 = makeAdder(5);
// const add10 = makeAdder(10);
// console.log(add5(3) === 8);    // true
// console.log(add10(3) === 13);  // true
// console.log(add5(add10(2)) === 17); // true

const makeAdder = (x)=>{
  function valY(y){
      return x + y;
  } 
  return valY;
}

const add5 = makeAdder(5)
// const add5 = makeAdder(valY(3))
// console.log(add5(3));



// ## Problem 4 — HOF: Build Your Own Map
// Implement `myMap(arr, fn)` from scratch — do NOT use the built-in `.map()`.
// It should apply `fn` to every element and return a new array.

// // Test cases:
// console.log(JSON.stringify(myMap([1,2,3], x => x * 2)) === "[2,4,6]");
// console.log(JSON.stringify(myMap(["a","b","c"], s => s.toUpperCase())) === '["A","B","C"]');
// console.log(JSON.stringify(myMap([], x => x)) === "[]");

const myMap = (array,fn) =>{
    let result = [];
    for(let i =0; i<array.lenght; i++){
      result.push(fn(array[i],i,array))
    }
    return result
};
console.log(JSON.stringify(myMap([1,2,3,4],x => x * 2))==="[2,4,6,8]");
console.log(JSON.stringify(myMap(["a","b","c"], s => s.toUpperCase())) === ["A","B","C"]    );


// ## Problem 5 — HOF: Build Your Own Filter
// Implement `myFilter(arr, fn)` from scratch — do NOT use `.filter()`.

// // Your code here
  

// // Test cases:
// console.log(JSON.stringify(myFilter([1,2,3,4,5], x => x % 2 === 0)) === "[2,4]");
// console.log(JSON.stringify(myFilter(["cat","dog","cow"], s => s.startsWith("c"))) === '["cat","cow"]');

function sum(a,b,c){
  console.log(a+b);
}

sum(5,5
)