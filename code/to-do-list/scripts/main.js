let taskArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : []

// retrieving the user inputted task
const submitTask = function (event) {
    event.preventDefault();

    const userInput = document.getElementById("taskTextInput").value;
    if (!taskTextInput.value) {
        window.alert('Please enter a task');
        return;
    }

    taskArray.push(userInput);
    console.log(taskArray);
}

const updateUIwithTask = function () {

}

document.querySelector("#taskForm").addEventListener("submit", submitTask);