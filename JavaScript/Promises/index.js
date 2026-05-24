// // const printName =  setTimeout(() => {
// //     return ("Name is Name");
// // }, 2000)

// // const promiseOne = new Promise((resolve, reject) => {
// //     printName
// // })
// // Promise.all([printName, printName, printName, printName])
// //     .then(() => {
// //     console.log("All functions are executed!!");

// // })

// // // console.log(promiseOne);
// // // console.dir(promiseOne, {showHidden: true, depth: null});
// // // console.log(typeof promiseOne);


// // // promiseOne.then((message) => {
// // //     console.log('Message is: ', message);

// // // })
// // //     .catch((err) => {
// // //         console.log("Error is: ", err);
// // //     })
// // //     .finally(() => {
// // //         console.log("Promise is complete!!");

// // //     })

// // const onePromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log("Async task in settimeout");
// //         let data = "User from Database is here"
// //         resolve(data)
// //     })
// // })

// // onePromise.then((data) => {
// //     console.log(data);

// // })
// const onePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Async task in settimeout");
//         let data = { name: "Balen Bor", age: 37, isPM: true }
//         // let data = false
//         if (data) {
//             resolve(data)
//         } else {
//             reject("Error: has occured")
//         }
//     })
// })

// onePromise.then((data) => {
//     // data.forEach(element => {
//     //     console.log(`Persons name is ${d ata.name} who is ${data.age} years old and Is also a ${data.isPM ? "PM of Nepal": "Normie"}`);
//     // });
//     console.log(`Person name is ${data.name} who is ${data.age} years old and Is also a ${data.isPM ? "PM of Nepal" : "Normie"}`);
// })
//     .catch((err) => {
//         console.log(err);

//     })
//     .finally(() => {
//         console.log("Promise is complete and consumed completely");

//     })

