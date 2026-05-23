let users = [
  {
    name: "ram",
    subjects: ["python", "ai", "ml"],
  },
  {
    name: "sita",
    subjects: ["python", "ml"],
  },
  {
    name: "hari",
    subjects: ["js", "node"],
  },
];

users.forEach((item) => {
  console.log(`${item.name} is studying ${item.subjects.join(' ')}`);
})

/* 
output:
ram is studying python, ai, ml
sita is studying python, ml
hari is studying js, node 

// let arr = [
//   {
//     name: "hari",
//     subjects: ["js", "node"],
//   }, {
//     name: "sita",
//     subjects: ["python", "ml"],
//   },
// ]
// console.log(`${arr[0].name} ${arr[0].subjects}`);
*/