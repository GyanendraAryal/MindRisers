// =====================================================
// SOLUTIONS — Read only after attempting!
// =====================================================

// ==================== BEGINNER ====================

// Problem 1
function sayHello(name) {
  return `Hello, ${name}! Welcome.`;
}

// Problem 2
function circleArea(radius) {
  return Math.PI * radius * radius;
}

// Problem 3
function celsiusToFahrenheit(c) { return (c * 9/5) + 32; }
function fahrenheitToCelsius(f) { return (f - 32) * 5/9; }

// Problem 4
function maxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// Problem 5
function isPalindrome(str) {
  const s = str.toLowerCase();
  return s === s.split("").reverse().join("");
}

// Problem 6
function makeGreeting(name, greeting = "Namaste") {
  return `${greeting}, ${name}!`;
}

// Problem 7
function countVowels(str) {
  return str.toLowerCase().split("").filter(c => "aeiou".includes(c)).length;
}

// Problem 8
const square = n => n * n;


// ==================== INTERMEDIATE ====================

// Problem 1 — Scope answers: "inner", "outer", "global"

// Problem 2
function makeCounter(start = 0) {
  let count = start;
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    reset()     { count = start; return count; },
    value()     { return count; }
  };
}

// Problem 3
function makeAdder(x) {
  return (y) => x + y;
}

// Problem 4
function myMap(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }
  return result;
}

// Problem 5
function myFilter(arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i, arr)) result.push(arr[i]);
  }
  return result;
}

// Problem 6
function myReduce(arr, fn, initial) {
  let acc = initial;
  for (let i = 0; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
}

// Problem 7
function stats(...nums) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  const sum = nums.reduce((a, b) => a + b, 0);
  const avg = Math.round((sum / nums.length) * 100) / 100;
  return { min, max, sum, avg };
}

// Problem 8
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in cache) return cache[key];
    cache[key] = fn(...args);
    return cache[key];
  };
}

// Problem 9
function compose(f, g) {
  return (x) => f(g(x));
}

function composeAll(...fns) {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x);
}


// ==================== ADVANCED ====================

// Problem 1 — Fibonacci
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Iterative (faster):
function fibIterative(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++) [a, b] = [b, a + b];
  return a;
}

// Problem 2 — Flatten
function flatten(arr) {
  return arr.reduce((acc, item) =>
    Array.isArray(item) ? acc.concat(flatten(item)) : acc.concat(item), []);
}

// Problem 3 — Deep Clone
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(deepClone);
  return Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k, deepClone(v)])
  );
}

// Problem 4 — Curry
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) return fn(...args);
    return (...moreArgs) => curried(...args, ...moreArgs);
  };
}

// Problem 5 — IIFE Bank Account
const bankAccount = (function() {
  let balance = 0;
  return {
    deposit(amount)  { balance += amount; },
    withdraw(amount) { if (amount <= balance) balance -= amount; },
    getBalance()     { return balance; }
  };
})();

// Problem 6 — Once
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn(...args);
    }
    return result;
  };
}

// Problem 7 — Debounce
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Problem 8 — Async Pipe
function asyncPipe(...fns) {
  return (input) => fns.reduce((p, fn) => p.then(fn), Promise.resolve(input));
}

// Problem 9 — Tree Traversal
function sumTree(node) {
  return node.value + node.children.reduce((sum, child) => sum + sumTree(child), 0);
}

function findInTree(node, target) {
  if (node.value === target) return node;
  for (const child of node.children) {
    const found = findInTree(child, target);
    if (found) return found;
  }
  return null;
}


// ==================== BOSS ====================

// Challenge 2 — Event Emitter
function createEmitter() {
  const listeners = {};
  return {
    on(event, fn)  { (listeners[event] = listeners[event] || []).push(fn); },
    off(event, fn) { listeners[event] = (listeners[event] || []).filter(l => l !== fn); },
    emit(event, ...args) { (listeners[event] || []).forEach(fn => fn(...args)); }
  };
}

// Challenge 5 — Trampoline
function trampoline(fn) {
  return function(...args) {
    let result = fn(...args);
    while (typeof result === "function") result = result();
    return result;
  };
}
