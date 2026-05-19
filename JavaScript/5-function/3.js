let students = [
  {
    name: "Ramesh",
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 }
    ]
  },
  {
    name: "Rita",
    scores: [
      { exam: "first-term", gpa: 1.5 },
      { exam: "second-term", gpa: 4 }
    ]
  },
  {
    name: "Kiran",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 }
    ]
  }
];

function userDetail(indx) {
  // arr.forEach(element => {
  //   console.log(`${element.name} scored gpa ${element.scores[0].gpa} in ${element.scores[0].exam} and ${element.scores[1].gpa} in ${element.scores[1].exam}`);
  // });
  console.log(`${students[indx].name} scored gpa ${students[indx].scores[0].gpa} in ${students[indx].scores[0].exam} and ${students[indx].scores[1].gpa} in ${students[indx].scores[1].exam}`);

}
userDetail(0)
userDetail(1)
userDetail(2)

/*  
    using functon, achieve the following
    
    EXPECTED-OUTPUT: 
    ramesh scored gpa 2 in first-term and 4 in second-term
    rita scored gpa 1.5 in first-term and 4 in second-term
    kiran scored gpa 4 in first-term and 2.9 in second-term

*/
