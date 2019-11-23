window.tasks = [
    {
        description: "This is the first task",
        done: false,
        id: 1
    },
    {
        description: "This is the second task",
        done: false,
        id: 2
    },
    {
        description: "This is the third task",
        done: true,
        id: 3
    }
];

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
        markAsDoneButton.addEventListener('click', () => {
            
        });

        deleteButton.addEventListener('click', (event) => {
           const taskElement = event.currentTarget.parentNode;
           // dataset is what HTML returns back to JS
           // console.log('taskItem ID:', taskElement.dataset.id);
           const id = Number(taskElement.dataset.id);
           window.tasks = window.tasks.filter((item) => item.id != id);
           displayTaskswithHTML();
        });
    });

    
}

displayTaskswithHTML();