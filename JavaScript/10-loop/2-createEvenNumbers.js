



/* 
    TODO: 1
    create a function generateEvenNumber 
    and if we pass an arguement 10,
    then output should be 2, 4, 6, 8 ,10 

*/


/* 

    TODO: 2
    create a function identifyEvenNumber
    if we pass an arguement 2, 
    the result should be yes it is an even number

    if we pass an arguement 1, 
    the result should be No it is not an even number

    if we pass an arguement "hello", 
    the result should be the provided data is not an number. 

*/


// function generateEvenNumber(num) {
//     for (let i = 1; i <= num; i++) {
//         console.log(`${i % 2 === 0 ? i : ""}`);
//     }
// }
// generateEvenNumber(10)


function identifyEvenNumber(value) {
    if (isNaN(value)) {
        console.log("Provided value is not a number");
    }
    else if (value % 2 === 0) {
        console.log(`Number ${value} is Even Number`);
    }
    else {
        console.log(`Not Even Number`);
    }
}
identifyEvenNumber(5)