let arr1 = [1, 2];
let arr2 = [3, 4];



function mergeArrays(arr1, arr2) {
    // CODE here 
    // return [...arr1,...arr2]
    let combined = []
    arr1.forEach(element => {
        combined.push(element)
    });
    arr2.forEach((element) => {
        combined.push(element)
    })
    return combined
}


let combined = mergeArrays(arr1, arr2);
console.log(combined);

/* EXPECTED output: 

    combined: [1,2,3,4]

*/