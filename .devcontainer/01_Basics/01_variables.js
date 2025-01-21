const accountID = 144553 // to declare constant

// to declare variable
let accountEmail = "abc@gmail.com";
var accountPassword = "12345" // dont use var
accountCity = "Lahore" // should not use but possible to declare variable
let accountState; // gives undefined if value not put



/*
dont use var because of issue in block scope and functional scope
*/



//accountID = 2 // not allowed

// can be changed
accountEmail = "change@gmail.com";
accountPassword = "99";
accountCity = "ISL";


console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity]); // gives in table form 
console.log(accountState);
