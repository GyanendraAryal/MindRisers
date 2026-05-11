// // // let Projector = {
// // //     brand: 'sony',
// // //     color: 'white',
// // //     price: 20000,
// // //     makeYear: 2026,
// // // }

// // // console.log(Projector.brand);

// // const user = {
// //     username: 'Ram',
// //     username: 'hero',
// //     email: 'ram@gmail.com',
// //     isAdmin: false,
// //     tempAddress: {
// //         municipality: {
// //             mayor: 'Hari'
// //         },
// //         district: 'Kathmandu',
// //         Tole: 'Anamnagar',
// //         ward: 2
// //     },
// //     permanentAddress: {
// //         municipality: {
// //             mayor: 'Shyam'
// //         },
// //         district: 'Butwal',
// //         Tole: 'Ramnagar',
// //         ward: 4
// //     },
// // }

// // // console.log(User.username);
// // // console.log(User.email);
// // // console.log(User.isAdmin);
// // console.log(user.tempAddress.municipality.mayor);
// // // console.log(User.tempAddress.district);
// // // console.log(User.tempAddress.Tole);
// // // console.log(User.tempAddress.ward);
// // console.log(user.permanentAddress.municipality.mayor);
// // // console.log(User.permanentAddress.district);
// // // console.log(User.permanentAddress.Tole);
// // // console.log(User.permanentAddress.ward);

// // user.permanentAddress.municipality.mayor = "Gyanendra"
// // console.log(user.permanentAddress.municipality.mayor);
// // console.log(user.username);


// const user = {
//     username:'superman',
//     email:'supe@gmail.com',
//     isSuperHero:true,
//     address:{
//         permanentAddress:{
//             district:'Butwal',
//             municipality:'Butwal',
//             ward:3,
//             mayor:'zod'
//         },
//         tempAddress:{
//             district:'Kathmandu',
//             municipality:'kathmandu',
//             ward:29,
//             mayor:'Captain'
//         },
//     }
// }

// console.log("Name is: ",user.username);
// console.log(user.email);
// console.log(user.isSuperHero);
// // console.log(user.address.permanentAddress.district);
// // console.log(user.address.permanentAddress.municipality);
// // console.log(user.address.permanentAddress.ward);
// // console.log(user.address.permanentAddress.mayor);
// console.log(user.address.tempAddress.district);
// console.log(user.address.tempAddress.municipality);
// console.log(user.address.tempAddress.ward);
// console.log(user.address.tempAddress.mayor);

// user.username = "Batman"
// console.log("Name is: ",user.username);

const course = {
    dataScience: {
        dataSciencewithpython: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
        dataAnalysisTraining: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
        aiEngineeringPython: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
    },
    webDevelopment: {
        fullstackPython: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
        fullstackJavascript: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
    },
    security: {
        cyberSecurityTrainging: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
        ethicalHackingTrainging: {
            price: 25000,
            durationInMonth: '3/4',
            format: 'physical/online'
        },
    },
}

// for (keys in course){
//     console.log(keys);
// }