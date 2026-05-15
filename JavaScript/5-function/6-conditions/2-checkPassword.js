let name = "ram";
let email = "ram@ram.com";
let password = "ram-password";



/* EXPECTED-OUTPUT */
// checkPassword("ram-password"); //  logged in
// checkPassword("ram-wrong-password"); //  Invalid Credentials

/* 
    TODO: 
    create a function checkPassword  
    and 
    if the password matches for above user, print  logged in else print invalid credentials


    as self-research check for Logical operators too AND(&&) , OR(||) , NOT(!)
    THEN , 
    MUTATE/UPDATE THE FUNCTION  checkPassword

    checkPassword("ram@ram.com","ram-password")   // user logged in 
    checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
    checkPassword("shayam@shyam.com","ram-password")   // Invalid Credentails
    */
   
   // const validateUser = (name,email,password)=>{
   //     if(name==='ram' && email === 'ram@ram.com' && password === 'ram-password'){
   //         console.log("User is validated");
   //     } else{
   //         console.log("User is not validated");
   //     }
   // }

// function checkPassword(pass) {
    //     if (pass === 'ram-password') {
        //         console.log("Valid Credentials");
        //     } else {
            //         console.log("Invalid Credentials");
            //     }
            // }
            // checkPassword('ram-password')
            // checkPassword('ram-wrong-password')