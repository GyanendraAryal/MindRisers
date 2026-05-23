const printName =  setTimeout(() => {
    return ("Name is Name");
}, 2000)

const promiseOne = new Promise((resolve, reject) => {
    printName
})
Promise.all([printName, printName, printName, printName])
    .then(() => {
    console.log("All functions are executed!!");
    
})

// console.log(promiseOne);
// console.dir(promiseOne, {showHidden: true, depth: null});
// console.log(typeof promiseOne);


// promiseOne.then((message) => {
//     console.log('Message is: ', message);

// })
//     .catch((err) => {
//         console.log("Error is: ", err);
//     })
//     .finally(() => {
//         console.log("Promise is complete!!");
        
//     })