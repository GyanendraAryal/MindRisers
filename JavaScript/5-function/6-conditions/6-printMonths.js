

/* 

create a function  getMonthName  to get the name of different months. 

   let name =  getMonthName(1)
   console.log(name)

    TODO:
    if i pass argument 1, it should give me January
    if i pass argument 2, it should give me February
    and so on....

    if i pass other than 1 to 12, it should give not a valid input

    
*/

/* 
    if else vs switch
*/

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

// function monthFinder(month){
//     console.log(`Month is ${months[month-1]}`);
// }
// monthFinder(4)




const findMonth = (month) => {
    for (let i = 1; i <= months.length; i++)
        switch (i) {
            case 1: console.log(months[i - 1]); break;
            case 2: console.log(months[i - 1]); break;
            case 3: console.log(months[i - 1]); break;
            case 4: console.log(months[i - 1]); break;
            case 5: console.log(months[i - 1]); break;
            case 6: console.log(months[i - 1]); break;
            case 7: console.log(months[i - 1]); break;
            case 8: console.log(months[i - 1]); break;
            case 9: console.log(months[i - 1]); break;
            case 10: console.log(months[i - 1]); break;
            case 11: console.log(months[i - 1]); break;
            case 12: console.log(months[i - 1]); break;
        }
}
findMonth(1)
