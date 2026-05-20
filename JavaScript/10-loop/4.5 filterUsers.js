let users = [
  {
    name: "ram",
    age: 15,
  },
  {
    name: "hari",
    age: 19,
  },
  {
    name: "shyam",
    age: 20,
  },
  {
    name: "gita",
    age: 21,
  },
  {
    name: "alex",
    age: 22,
  },
];

/* TODO: create an new array having user of age > 20 only */

function userFilter(array) {
  newUsers = array.filter((item) => item.age > 20)
  return newUsers
}
console.log(userFilter(users))