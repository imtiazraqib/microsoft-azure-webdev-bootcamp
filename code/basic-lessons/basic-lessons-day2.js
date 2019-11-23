// To add strings, we can just put a comma instead of the plus sign
let name = "Imtiaz"
let secondName = "Vanessa"
console.log("My name is", name, secondName);

// Creating objects

const myObject = {};
myObject.name = "Imtiaz";                       // Creating a property "name" with its value
console.log(myObject);


const anotherObject = {
    name: "oImtiaz",                             // Creating a property "name" with its value explicitly

    showName: function () {                     // Creating a property function "showName"
        console.log(this.name);
    },

    web102: "November JS Workshop"
}

console.log(anotherObject.showName());
console.log(anotherObject['web' + (100 + 2)]);

/* How we can use dynamic property calling in 
real life scenarios

const accounts = {
    "imtiazraqib@gmail.com" : {
        name: "Imtiaz",
        activeUser: true,
    },

    "noemail@email.com": {
        name: "Noname",
        activeUser: false,
    }
}

return accounts[authorizedUserEmail];
*/