// const promiseOne = new Promise((resolve, reject) => {
//     console.log("anync task inside promise");
//     setTimeout(() => {
//         // const data = { name: "Balen", age: 37, isPm: true }
//         const data = false
//         if (data) {
//             resolve(data)
//         } else {
//             reject({message: "Something went worng"})
//         }
//     })
// })
// promiseOne
//     .then((data) => {
//     console.log(data);
    
//     })
//     .catch((data) => {
//     console.log(data.message);
    
// })


// function fetchData() {
//     return fetch("https://dummyjson.com/test")
//         .then((data) => data.json())
//     //     .then((data) => {
//     //     // console.log(data);
//     // })
// }
// fetchData().then((data) => {
//     console.log(data);
    
// })

async function fetchData() {
    const response = await fetch("https://dummyjson.com/test")
    const data = await response.json()
    // console.log(data);
    
    // console.log(response);
    
    return data
}
fetchData().then((data) => {
    console.log(data);
    
})
// console.log(fetchData())