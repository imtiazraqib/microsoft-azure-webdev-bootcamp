// Traditional way of function declaration
const greetings = function (name) {
    console.log("Helloooooo", name + "!");
}
greetings("Imtiaz");

// Newer way of function declaration
const anotherOne = (name) => {
    console.log("Another One", name)
}
anotherOne("DJ Khaled");


// Benefits of the arrow functionality

// Old way of doing addition function
const oldSum = function(a, b) {
    return (a + b);
}
console.log(oldSum(3, 9));

// New way of doing addiion function
const newSum = (x, y) => (x+y);         // Allows us to perform a return directly instead
                                        // of using a code block
console.log("New sum using the arrown function", newSum(14, 20));

const displayValue = (values) => console.log(value);

// Complex example of benefits of arrow function
// log is another function within this function
const logAndCalculateSum = (log, x, y, z) => {
    log(x);
    log(y);
    log(z);

    return x+y+z;
}
// declaring the log function when calling logAndCalculateSum function
const sum = logAndCalculateSum((value) => console.log("value is", value), 2, 4, 8);
console.log("The sum is", sum);

