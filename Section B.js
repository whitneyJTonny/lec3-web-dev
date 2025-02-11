//creating a data type that enters the parameter name

function checkDataType(value) {  
    return typeof value;  
}  
console.log(checkDataType(42)); // "number"  
console.log(checkDataType("Hello")); // "string" 

//Write a program to demonstrate the difference between null, undefined, and an empty string.

let a = null;  
let b; // undefined  
let c = ""; // Empty string  

console.log(a); // null  
console.log(b); // undefined  
console.log(c); // ""  

//Declare a variable using const and try to reassign it.

const x = 10;  
// x = 20; // This will cause an error  

// Explanation: Variables declared with `const` cannot be reassigned.

//Update the third element of an array to "Banana".
let fruits = ["Apple", "Mango", "Orange"];  
fruits[2] = "Banana";  
console.log(fruits); // ["Apple", "Mango", "Banana"]  

//Write a function that checks if a variable is an object and not null.
function isObject(variable) {  
    return typeof variable === "object" && variable !== null;  
}  
console.log(isObject({ name: "John" })); // true  
console.log(isObject(null)); // false  

//Bonus Question 
//Write a function that checks if two values are strictly equal (===) and explains why if they are not.
function strictEqualityCheck(a, b) {  
    if (a === b) {  
        return "They are strictly equal.";  
    } else {  
        return `${a} and ${b} are not strictly equal because one is a ${typeof a} and the other is a ${typeof b}.`;  
    }  
}  

console.log(strictEqualityCheck(5, "5")); // "5 and '5' are not strictly equal because one is a number and the other is a string." 