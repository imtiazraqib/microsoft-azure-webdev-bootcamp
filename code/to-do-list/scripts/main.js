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
        done: false,
        id: 3
    }
];

function displayTaskswithHTML() {
    const listElement = document.querySelector(".bottom-row ul");
    listElement.innerHTML = "";

    window.tasks.forEach((item) => {
        listElement.innerHTML += `
        <li>
            <span>${item.description}</span>
        </li>
        `;
    });
}

displayTaskswithHTML();