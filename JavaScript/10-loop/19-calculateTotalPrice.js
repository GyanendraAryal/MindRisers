let cart = [
  { name: "Book", price: 500 },
  { name: "Pen", price: 50 },
  { name: "Notebook", price: 150 }
];

/*
TODO: Create a function called calculateTotalPrice that takes an array of items (each with price property) and returns the total price.

Example:
calculateTotalPrice(cart) ➞ 700
*/
const calculateTotalPrice = (array) => {
  return array.reduce((acc, next) => acc += next.price, 0)
}
console.log(calculateTotalPrice(cart));
