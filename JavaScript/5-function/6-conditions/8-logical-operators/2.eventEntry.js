let users = [
  { name: "ram", member: true, hasTicket: false },
  { name: "hari", hasTicket: false },
  { name: "sita", member: false, hasTicket: false },
  { name: "shyam", member: false, hasTicket: true },
];
// console.log(users[0]);
// console.log(users.length);



/* EXPECTED-OUTPUT
    ram can enter the event 
    heri can not enter the event 
    sita can not enter the event 
    shyam can enter the event 
*/
function validateUser() {
  for (let i = 0; i < users.length; i++) {
    console.log(`${users[i].name} ${users[i].member && users[i].hasTicket ? "can" : "cannot"} enter the event`)
  }
}
validateUser()