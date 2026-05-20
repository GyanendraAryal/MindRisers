let vegetables = ["potato", "tomato", "onion", "carrot"];

/* 
TODO: Check if "tomato" exists in the vegetables array and print the result.
Also check if "cabbage" exists.

Hint: You can loop through the array or check each index!

Expected output:
tomato exists: true
cabbage exists: false
*/
function checkAvailability(item) {
    if (vegetables.includes(item)) {
        console.log(`${item} exists: ${vegetables.includes(item)}`);
    } else {
        console.log(`${item} does not exists: ${vegetables.includes(item)}`);
    }
}
checkAvailability('tomato')
checkAvailability('cabbage')