

/* 

    print multiplcation of a digit for 

    8  begining from 1 to  10 
    10 begining from 11 to 20
    


     => 
     8 X 1 = 8
     8 X 2 = 16
     .
     .
     .
     8 X 10 = 80

     and 


     10 X 11 = 110
     10 X 12 = 120
     .
     .
     .
     10 X 20 = 200


*/


/* 
    Additionally create a function,
    so that we can calculate for other numbers as well


    printMulitplication(8,1,10) // should print from 1 to 10 for number 8
    printMulitplication(10,10,20)
    printMulitplication(12,5,15) // should print from 5 to 15 for number 12

*/
function printMultiplication(num, operand1, operand2) {
    for (let i = operand1; i <= operand2; i++) {
        console.log(`${num} X ${i} = ${num * i}`);
    }
}
printMultiplication(8, 1, 10)
// printMultiplication(10, 10, 20)
// printMultiplication(12, 5, 15)