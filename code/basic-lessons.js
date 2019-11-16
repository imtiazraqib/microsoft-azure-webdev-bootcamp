console.log("What's up my G?");
console.log("I am doing well, and you?");
console.log("Alright Alright Alright");

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
console.log(myName + ' is Batman and his favorite number is ' + myNumber);

// Creating a function

function greetings(name) {                  // takes a parameter
    console.log("Good morning " + name + ", and if I do not see you, good afternoon, good evening and good night.");
}

greetings(myName);                          // calling the fucntion with the variable
greetings("Messi");                          // calling the fucntion with the variable
greetings("Ronaldo");                          // calling the fucntion with the variable