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
    window.attempts += 1;

    if (Number.isNaN(userInput)) {
        window.alert("Please enter a number only!");
        return;
    }

    if (userInput === window.randomNumber) {
        updateUIwithStatus("win");
    } else {
        updateUIwithStatus("lose");
    }
}

const restartGame = function () {
    const min = 1;
    const max = 20;

    // window is basically creating a global variable
    window.randomNumber = generateRandomNumberWithinRange(min, max);

    // reset the counter
    window.attempts = 0;

    // Updating the number for min and max using JS
    // Changing DOM elements using JS
    const inputLabel = document.querySelector("span.input-label");
    const labelText = inputLabel.textContent; 
    const updateLabeltext = labelText.replace("{x}", min).replace("{y}", max);
    inputLabel.textContent = updateLabeltext;

    const topBar = document.querySelector(".feedback-divider:first-child");
    const btmBar = document.querySelector(".feedback-divider:last-child");
    const statusText = document.querySelector(".feedback-text .status");
    const attemptsText = document.querySelector(".attempts");
    let feedbackText;

    // removing all the intiial styling classes
    topBar.classList.add("hide");
    btmBar.classList.add("hide");
    statusText.classList.add("hide");
    attemptsText.classList.add("hide");


}

const updateUIwithStatus = function (status) {
    // status will either be "win" or "lose"
    const topBar = document.querySelector(".feedback-divider:first-child");
    const btmBar = document.querySelector(".feedback-divider:last-child");
    const statusText = document.querySelector(".feedback-text .status");
    const attemptsText = document.querySelector(".attempts");
    let feedbackText;

    // removing all the intiial styling classes
    topBar.classList.remove("hide", "win", "lose");
    btmBar.classList.remove("hide", "win", "lose");
    statusText.classList.remove("hide", "win", "lose");
    attemptsText.classList.remove("hide");

    // only adding the required classes based on the right status
    topBar.classList.add(status);
    btmBar.classList.add(status);
    statusText.classList.add(status);

    // Updating it using JS object literal notation and a ternary operator for saying 1 time vs 2 times
    const attemptsTextUpdate = `You tried ${window.attempts} time${window.attempts === 1 ? "" : "s"}.`
    attemptsText.textContent = attemptsTextUpdate;

    // This update will work only once because, after the first update, {x} is no more
    // attemptsText.textContent = attemptsText.textContent.replace("{x}", window.attempts);

    // Displaying the feedback text between topBar and btmBar
    if (status === "win") {
        feedbackText = "You win!";
    } else if (status === "lose") {
        feedbackText = "You lost."
    }
    statusText.textContent = feedbackText;
}

document.querySelector("#taskForm").addEventListener("submit", submitNumber);
document.querySelector("#taskForm").addEventListener("reset", restartGame)
restartGame();






