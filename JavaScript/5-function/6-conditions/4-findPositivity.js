/* TODO:Write a program that takes a number as input and checks if it is positive, negative, or zero or not a number. 


If it is positive, output "The number is positive." 
If it is negative, output "The number is negative." 
If it is zero, output "The number is zero."
If it is not a number, output "The value is not a number"




OUTPUT:
*/

function findPositivity(number){
    if(number > 0){
        console.log(`${number} is positive`);
    } else if(number < 0){
        console.log(`${number} is negative`);
    } else if(isNaN(number) ){
        console.log(`${number} is not a number`);
    }
}

findPositivity(0)
findPositivity(100)
findPositivity(-1)
findPositivity("Hello")





