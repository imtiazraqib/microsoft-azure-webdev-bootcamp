window.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function displayTaskswithHTML() {
    const listElement = document.querySelector(".bottom-row ul");
    listElement.innerHTML = "";

    window.tasks.forEach((item) => {
        listElement.innerHTML += `
        <li data-id="${item.id}" class="task-item ${item.done ? 'done' : ''}">
            <span>${item.description}</span>
            <button class="matter-button-contained">Mark as Done</button>
            <button class="matter-button-contained matter-secondary">Delete</button>
        </li>
        `;
    });

    bindTaskButtonActions();
}

function bindTaskButtonActions() {
    // Selects all the elements with class task-item and looping
    // through them as querSelectorAll returns an array
    document.querySelectorAll(".task-item").forEach((taskElement) => {
        const markAsDoneButton = taskElement.querySelectorAll("button")[0];
        const deleteButton = taskElement.querySelectorAll("button")[1];

        // addEventListener takes an "event-type" and then a function
        // to do something
        markAsDoneButton.addEventListener('click', (event) => {
            const taskElement = event.currentTarget.parentNode;
            const id = Number(taskElement.dataset.id);

            window.tasks.find((item) => {
                if (item.id === id) {
                    taskElement.classList.add('done');
                    item.done = true;
                    return true;
                }
            });

            const taskJSONstring = JSON.stringify(window.tasks);
            localStorage.setItem('tasks', taskJSONstring);
            
        });

        deleteButton.addEventListener('click', (event) => {
           const taskElement = event.currentTarget.parentNode;
           // dataset is what HTML returns back to JS
           // console.log('taskItem ID:', taskElement.dataset.id);
           const id = Number(taskElement.dataset.id);
           window.tasks = window.tasks.filter((item) => item.id != id);
           displayTaskswithHTML();

           const taskJSONstring = JSON.stringify(window.tasks);
           localStorage.setItem('tasks', taskJSONstring);
        });
    });
}

function submitTaskForm(event) {
    event.preventDefault();
    
    let inputTaskField = document.querySelector("#taskTextInput");
    let userInputTask = document.querySelector("#taskTextInput").value;
    if (!userInputTask) {
        window.alert("Please enter a task");
    }

    const taskObject = {
        description: userInputTask,
        done: false,
        id: Date.now()
    };

    window.tasks.push(taskObject);
    inputTaskField.value = "";
    displayTaskswithHTML();

    const taskJSONstring = JSON.stringify(window.tasks);
    localStorage.setItem('tasks', taskJSONstring);

    
}

displayTaskswithHTML();
document.querySelector("#taskForm").addEventListener('submit', submitTaskForm);