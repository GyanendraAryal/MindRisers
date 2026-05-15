let users = [
  { name: "Ram", percentage: 39 },
  { name: "Sita", percentage: 50 },
  { name: "Hari", percentage: 40 },
];

// 40 and > pass
// 40 and < fail


/*  EXPECTED-OUTPUT:

    ram has failed
    sita has passed 
    hari has passed 

*/

const resutlPublish = (result) => {
  result.forEach(element => {
    if(element.percentage > 40){
      console.log(`${element.name} has passed the exam`);
    } else{
      console.log(`${element.name} has failed the exam`);
    }
  });
}
resutlPublish(users)
