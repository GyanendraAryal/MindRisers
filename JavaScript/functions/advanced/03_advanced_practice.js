// // # Practice Set 3 — Advanced
// // > Topic: Recursion, Currying, Pure Functions, IIFE, Callbacks
// // > Difficulty: ⭐⭐⭐⭐☆
// // > Est. Time: 90–120 minutes

// // ---

// // ## Problem 1 — Recursion: Fibonacci
// // Write `fibonacci(n)` that returns the nth Fibonacci number.
// // F(0)=0, F(1)=1, F(n) = F(n-1) + F(n-2)

// ```js
// // Your code here


// // Test cases:
// console.log(fibonacci(0) === 0);   // true
// console.log(fibonacci(1) === 1);   // true
// console.log(fibonacci(6) === 8);   // true
// console.log(fibonacci(10) === 55); // true
// ```

// **Bonus:** Rewrite it iteratively. Compare which is cleaner and which is faster.

// ---

// ## Problem 2 — Recursion: Flatten Nested Array
// Write `flatten(arr)` that flattens a deeply nested array.

// ```js
// // Your code here


// // Test cases:
// console.log(JSON.stringify(flatten([1, [2, [3, [4]], 5]])) === "[1,2,3,4,5]");
// console.log(JSON.stringify(flatten([1, 2, 3])) === "[1,2,3]");
// console.log(JSON.stringify(flatten([[1,2],[3,[4,[5]]]])) === "[1,2,3,4,5]");
// ```

// ---

// ## Problem 3 — Recursion: Deep Object Clone
// Write `deepClone(obj)` that creates a deep copy of an object (handle nested objects and arrays).

// ```js
// // Your code here


// // Test:
// const original = { a: 1, b: { c: 2, d: [3, 4] } };
// const cloned = deepClone(original);
// cloned.b.c = 99;
// cloned.b.d.push(5);

// console.log(original.b.c === 2);              // true (not mutated)
// console.log(original.b.d.length === 2);       // true (not mutated)
// console.log(cloned.b.c === 99);               // true
// ```

// ---

// ## Problem 4 — Currying
// Write a function `curry(fn)` that converts any multi-argument function
// into a curried version.

// ```js
// // Your code here


// // Test cases:
// const add = (a, b, c) => a + b + c;
// const curriedAdd = curry(add);

// console.log(curriedAdd(1)(2)(3) === 6);          // true
// console.log(curriedAdd(1, 2)(3) === 6);          // true
// console.log(curriedAdd(1)(2, 3) === 6);          // true
// console.log(curriedAdd(1, 2, 3) === 6);          // true
// ```

// ---

// ## Problem 5 — IIFE Module Pattern
// Use an IIFE to create a `bankAccount` module with private `balance`.
// Expose only: `deposit(amount)`, `withdraw(amount)`, `getBalance()`.
// - `withdraw` should fail silently if funds are insufficient.

// ```js
// const bankAccount = (function() {
//   // Your private state and returned public API here

// })();

// // Test:
// bankAccount.deposit(1000);
// console.log(bankAccount.getBalance() === 1000); // true
// bankAccount.withdraw(300);
// console.log(bankAccount.getBalance() === 700);  // true
// bankAccount.withdraw(900);                       // should fail silently
// console.log(bankAccount.getBalance() === 700);  // true — balance unchanged
// ```

// ---

// ## Problem 6 — Once
// Write a function `once(fn)` that ensures `fn` is only ever called once.
// After the first call, it always returns the first result without calling `fn` again.

// ```js
// // Your code here


// // Test:
// let callCount = 0;
// const init = once(() => {
//   callCount++;
//   return "initialized";
// });

// console.log(init() === "initialized"); // true
// console.log(init() === "initialized"); // true (cached)
// console.log(init() === "initialized"); // true (cached)
// console.log(callCount === 1);         // true — fn only called once
// ```

// ---

// ## Problem 7 — Debounce
// Write a `debounce(fn, delay)` function.
// It returns a new function that only calls `fn` after `delay` milliseconds
// have passed since the LAST invocation.

// ```js
// // Your code here (uses setTimeout/clearTimeout)


// // Manual test:
// const log = debounce((msg) => console.log(msg), 300);
// log("a");
// log("b");
// log("c");
// // Only "c" should be logged after 300ms
// ```

// ---

// ## Problem 8 — Pipe with Async Functions
// Write `asyncPipe(...fns)` that takes async functions and pipes them left-to-right,
// passing the result of each to the next.

// ```js
// // Your code here


// // Test:
// const double = async x => x * 2;
// const addTen = async x => x + 10;
// const stringify = async x => `Result: ${x}`;

// const transform = asyncPipe(double, addTen, stringify);
// transform(5).then(result => {
//   console.log(result === "Result: 20"); // true  (5*2=10, 10+10=20)
// });
// ```

// ---

// ## Problem 9 — Recursive Tree Traversal
// Given a tree node `{ value, children: [] }`, write:
// - `sumTree(node)` — returns sum of all values
// - `findInTree(node, target)` — returns the node with matching value or `null`

// ```js
// // Your code here


// // Test:
// const tree = {
//   value: 1,
//   children: [
//     { value: 2, children: [
//       { value: 4, children: [] },
//       { value: 5, children: [] }
//     ]},
//     { value: 3, children: [
//       { value: 6, children: [] }
//     ]}
//   ]
// };

// console.log(sumTree(tree) === 21);                        // true
// console.log(findInTree(tree, 5).value === 5);             // true
// console.log(findInTree(tree, 99) === null);               // true
// ```

// ---

// ## Reflection Questions
// 1. What is the call stack? What happens when recursion has no base case?
// 2. What is currying? How is it different from partial application?
// 3. What is a pure function? Why do functional programmers prefer them?
// 4. When would you use debounce vs throttle?
