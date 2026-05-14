// const colors = [
//     { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
//     { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
//     { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
//     { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
//     { name: "black", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 },
// ];


// // colors.forEach((item,index)=>{
//     //     console.log(`Hex value of ${colors[index].name} is ${colors[index].hex}`);
//     // })
    
    
//     const printColors = (index)=>{
//         console.log(`Hex value of ${colors[index].name} is ${colors[index].hex} and rgb value is ${colors[index].rgb} and index is ${colors[index].arrayIndex}`);
//     }
//     printColors(1)
//     printColors(2)
//     printColors(0)
//     printColors(3)
//     printColors(4)


//Prind double of following numbers 2,5,10,20,50,100

// const printDouble = (arr)=>{
//     arr.forEach(element => {
//         console.log(`Double of ${element} is ${element + element}`)
//     });
// }
// printDouble([2,5,10,20,50,100])


// const sum = (a,b)=>{
//     return a + b
// }
// console.log(sum(5,5));
const sum =(...array)=>{
    return array.reduce((sum,next)=>{
        return sum + next
    })
}
console.log(sum(3,4,5,6,9));
