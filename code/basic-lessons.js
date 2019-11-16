console.log("What's up my G?");
console.log("I am doing well, and you?");
console.log("Alright Alright Alright\n");   // "\n" adds a newline character

// JavaScript is a loose typed language

// Using variables in JS
var myNumber = 8;
console.log('My number is ' + myNumber);    // Loose language because it automatically 
                                            // checks that console.log is a string and
                                            // anything following that must be a string 
                                            // as well


console.log(myNumber + ' is my Number');    // This works as well
                                            // JS puts everything to the most primitive type


var myName = 'Imtiaz'
console.log(myName + ' is Batman and his favorite number is ' + myNumber + "\n");

// Creating a function

function greetings(name) {                  // takes a parameter
    console.log("Good morning " + name + ", and if I do not see you, good afternoon, good evening and good night.");
}

greetings(myName);                          // calling the fucntion with the variable
greetings("Messi");                         // calling the fucntion with the string itself
greetings("Ronaldo from Portugal");         // calling the fucntion with the string in a sentence

// camelCase examples: fetchUserDetails, updateDB
// reserved JS Objects: Array, Object, Number, String, Class

// Creating Variables
var myFruit = "banana"                      // Using "var"
let someFruit = "grapes"                    // using "let" - introduced in 2014

const theFruit = "watermelon"               // using "const" - should not change - also introduced in 2014
                                            //      > changing a const will lead to a TypeError
                                            //      > it should also have a initial value

// Conditional Statements
function fruitColor(inputtedFruit) {
    let color;

    if (inputtedFruit === 'banana') {
        color = "yellow";
    } else if (inputtedFruit === "grapes") {
        color = "lime green"
    } else {
        color = "idk my G!\n"
        let errorLet = "This is an error through 'let'"    // let is only defined in this else block and is lost once it is outside
        var errorVar = "This is an error through 'var'"    // var will not be lost and still can be accessed outside the else block
    }

    console.log("The color of " + inputtedFruit + " is " + color);
    // console.log(errorVar)
}

fruitColor(myFruit);
fruitColor(someFruit);
fruitColor("plum");


// Function expression prevents JS from hoisting it
// It is stored as variable
const theFunction = function (someName) {
    // this function is only available after the point of assignment is made
    return "Waddup " + someName;
}
const greet = theFunction("Imtiaz");
console.log("Good day and " + greet + "?\n");

// Passing a function into another function
// generateGreeting is going to take a function morningGreet
// and run it using inputName as the parameter
const generateGreeting = function (morningGreet, inputName) {
    const greetings = morningGreet(inputName);
    console.log("Hello, welcome and " + greetings);
}
generateGreeting(theFunction, "Imtiaz");

// Calling a function immediately on the spot
// This is a common practice to avoid polluting the global namespace
// In a company, multiple scripts may have the same variables
// This encapsulates a block of code
// This is called Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("enclosed function is running");
}());