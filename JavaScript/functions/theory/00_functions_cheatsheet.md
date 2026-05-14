# Functions – Complete Concept Cheatsheet
> Master reference sheet. Read before attempting practice sets.

---

## 1. What is a Function?
A **function** is a reusable block of code that performs a specific task.
- Takes **input** (parameters/arguments)
- Does **work** (body)
- Returns **output** (return value)

---

## 2. Function Declaration vs Expression vs Arrow

```js
// Declaration — hoisted, callable before definition
function greet(name) {
  return "Hello, " + name;
}

// Expression — NOT hoisted
const greet = function(name) {
  return "Hello, " + name;
};

// Arrow — concise, no own `this`
const greet = (name) => "Hello, " + name;
```

---

## 3. Parameters vs Arguments
| Term       | Meaning                              |
|------------|--------------------------------------|
| Parameter  | Variable in function definition      |
| Argument   | Actual value passed when calling     |

```js
function add(a, b) { return a + b; }   // a, b = parameters
add(3, 5);                              // 3, 5 = arguments
```

---

## 4. Default Parameters
```js
function power(base, exp = 2) {
  return base ** exp;
}
power(3);     // 9  (exp defaults to 2)
power(3, 3);  // 27
```

---

## 5. Return Values
- Every function returns something
- Without `return` → returns `undefined`
- `return` exits the function immediately

```js
function isEven(n) {
  if (n % 2 === 0) return true;
  return false;
}
```

---

## 6. Scope
```
Global Scope
  └── Function Scope (each function creates its own)
        └── Block Scope (let/const inside {})
```

- **var** → function-scoped
- **let/const** → block-scoped
- Inner functions CAN access outer variables (closure)
- Outer scope CANNOT access inner variables

---

## 7. Closures
A function that "remembers" its outer scope even after the outer function has returned.

```js
function makeCounter() {
  let count = 0;              // "closed over" variable
  return function() {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

---

## 8. Higher-Order Functions (HOF)
A function that:
- Takes another function as an argument, OR
- Returns a function

```js
// Takes function as argument
[1,2,3].map(x => x * 2);         // [2, 4, 6]
[1,2,3].filter(x => x > 1);      // [2, 3]
[1,2,3].reduce((acc, x) => acc + x, 0); // 6

// Returns a function
function multiplier(factor) {
  return (num) => num * factor;
}
const double = multiplier(2);
double(5); // 10
```

---

## 9. Recursion
A function that calls **itself** until a **base case** is met.

```js
function factorial(n) {
  if (n === 0) return 1;           // base case
  return n * factorial(n - 1);    // recursive case
}
factorial(5); // 120
```

---

## 10. Rest Parameters & Spread
```js
// Rest: collect multiple args into array
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// Spread: expand array into arguments
const nums = [1, 2, 3];
Math.max(...nums); // 3
```

---

## 11. IIFE (Immediately Invoked Function Expression)
```js
(function() {
  console.log("Runs immediately!");
})();
```
Used to create isolated scope (avoid polluting global scope).

---

## 12. Pure vs Impure Functions
| Type   | Definition                               | Example                    |
|--------|------------------------------------------|----------------------------|
| Pure   | Same input → same output, no side effects | `(a, b) => a + b`         |
| Impure | Modifies external state or has side effects | `() => Math.random()`    |

---

## 13. Callback Functions
A function passed as an argument to be called later.
```js
function doTask(callback) {
  console.log("Doing task...");
  callback();
}
doTask(() => console.log("Task done!"));
```

---

## 14. Key Mental Models
- Function = mini-program with its own scope
- Arrow functions = concise + inherit `this` from surrounding context
- Closure = function + its birthplace environment
- HOF = functions as first-class citizens (values, not just actions)
- Recursion = problem solved by solving a smaller version of itself
