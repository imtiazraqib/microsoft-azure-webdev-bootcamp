/*
    1. As the page loads, we need to "wire-up" the buttons
    2. Also, prepare a random number as the game starts
    3. As the user sumbits their answer
        - We will take the input value and compare it against our random numnber
        - if the number matches, we show that the user won
        - if the number does not match, we show that the user needs to try it again
    4. If the user does submit an invalid query, warn the user the input is invalid
    5. Record and keep count of their attempts
    6. If the user clicks the restart button:
        - clear off all visuals
        - reset the counter for the number attempts
        - clear off previous inputs

    Changing the game visuals
        - point to the elements and remove the hide class
        - change the classes of the elements between "win" and "stuff"
*/

const generateRandomNumberWithinRange = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const submitNumber = function (event) {
    event.preventDefault();     // prevents the screen from refreshing and only listens
                                // if submit is hit again.

    const userInput = Number(document.getElementById('numberTextInput').value);
    // if the user does not enter a number, the number conversion of a non-number
    // returns NaN - Not a Number

    if (Number.isNaN(userInput)) {
        window.alert("Please enter a number only!");
        return;
    }
}

const restartGame = function (event) {
    const min = 1;
    const max = 20;

    // window is basically creating a global variable
    window.randomNumber = generateRandomNumberWithinRange(min, max);

    // reset the counter
    window.attempts = 0;
        
}

document.querySelector("#taskForm").addEventListener("submit", submitNumber);
document.querySelector("#taskForm").addEventListener("reset", restartGame)
restartGame();






