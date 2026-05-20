/* 

TODO: 
    From the above array create an new array of users with email and password 


    OUTPUT should be like following
    [
        { name: 'Aarav', email: 'aarav@gmail.com', password: 'aarav0' },
        { name: 'Aarya', email: 'aarya@gmail.com', password: 'aarya1' },
        { name: 'Aasha', email: 'aasha@gmail.com', password: 'aasha2' },
        { name: 'Anisha', email: 'anisha@gmail.com', password: 'anisha3' },
    ] 

*/

const nepaliNames = ["Aarav", "Aarya", "Aasha", "Anisha"]
let users = []
function convertToArrayOfObj() {
    nepaliNames.forEach((element, index) => {
        users.push({
            name: element,
            email: `${element.toLowerCase().trim()}@gmail.com`,
            password:`${element.toLowerCase().trim()}${index}`
            }
        )
    })
}
convertToArrayOfObj()
console.log(users);
