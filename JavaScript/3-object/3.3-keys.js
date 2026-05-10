/* 
    case sensitivity in object keys. 
*/

let obj = {
    name: "Ram",
    name: "Hari",
    Name: "shyam"
}

console.log(obj.name); // what will it print--Hari
console.log(obj.Name); // what will it print--shyam




