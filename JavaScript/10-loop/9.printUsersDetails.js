let users = [
  {
    name: "ram",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
    ],
  },
  {
    name: "hari",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
    ],
  },
  {
    name: "sita",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
      {
        name: "ml",
        price: 2000,
      },
    ],
  },
];

/* 
    output:
    ram is studying python, ai, ml and his total cost is  3000

*/
let value;
users.forEach((user) => {

  const subjectNames = user.subjects.map((item) => item.name)
  const subjectStrings = subjectNames.join(', ')
  const totalCost = user.subjects.reduce((acc, next) => { return acc = acc + next.price }, 0)
  // console.log(totalCost);

  console.log(`${user.name} is studying ${subjectNames} and his total cost is ${totalCost}`);
  
  // console.log (`${user.name} is studying ${user.subjects.map((item) => `${item.name}`)} ${user.subjects.reduce((acc, item) => { return acc + item.price }, 0)}`);
})