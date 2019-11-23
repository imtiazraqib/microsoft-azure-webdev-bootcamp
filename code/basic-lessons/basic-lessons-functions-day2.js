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
const logAndCalculateSum = (imti, x, y, z) => {
    imti(x);
    imti(y);
    imti(z);

    return x+y+z;
};
// declaring the log function when calling logAndCalculateSum function
const sum = logAndCalculateSum((value) => console.log("value is", value), 2, 4, 8);
console.log("The sum is", sum);

const fruits = ["apple", "banana", "berry"];

// map goes through the array and builds a new array with the new values
// fruitName is the indexed value of the fruits array
const sentences = fruits.map((fruitName) => "The fruit you eat is " + fruitName);
console.log(sentences);

// Shortens codes as well

const work = () => (x) => console.log(x)
/*
Same as writing

const work = function () {
    return function (x) {
        console.log(x);
    }
}
*/