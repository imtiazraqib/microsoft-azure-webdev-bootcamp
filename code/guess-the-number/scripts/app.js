/*
    1. Asthe page loads, we need to "wire-up" the buttons
    2. Also, prepare a random number as the game starts
    3. As the user sumbits their answer
        - We will take the input value and compare it against our random numnber
        - if the number matches, we show that the user won
        - if the number does not match, we show that the user needs to try it again
    4. If the user does submit an invalid query, warn the user the input is invalid
*/

const sumbitButtom = document.quer

function getUserInput() {
    let userInput = document.getElementById('numberTextInput').nodeValue;
    return userInput;
}




