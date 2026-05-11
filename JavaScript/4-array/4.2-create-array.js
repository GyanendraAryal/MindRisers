let colorNames = ["white", "red", "blue", "green", "black"]


/* 
 we can create an array of colors like above  
    BUT
    TODO: what if we need to store  hex-values of respecitve colors too

    is this the right way ?

    let colorNames = ["white","#FFFFFF","red",'FF0000', "blue",'0000FF']


*/

// colorNames = [['white','#FFFF'],['red','#FF0000'],['blue','#0000FF']]

let colorNames = [
    {
        name:"white",
        hexcode:"#ffff"
    },
    {
        name:"red",
        hexcode:"#ff0000"
    },
    {
        name:"blue",
        hexcode:"#00ff"
    }
]

console.log(colorNames);
