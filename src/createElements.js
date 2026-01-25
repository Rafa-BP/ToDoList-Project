import { DeleteProject, GetProjects, GetTodos } from "./dataHandler";

const projectContainer = document.getElementById("projects-container");
const main = document.getElementById("main");
const header = document.getElementById("header");

export function HidePanel() {
    header.style = "opacity: 0;"
    ClearTodos();
}

export function ShowPanel() {
    header.style = "opacity: 1;"
}

function CreateProjectElement(title) {
    let newBtn = document.createElement("button");  
    newBtn.classList.add("project");
    newBtn.textContent = title;

    return newBtn;
};

function CreateTodoElement(title, date, priority, desc) {
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo");

    let newTitle = document.createElement("h2");
    newTitle.textContent = title;
    newTitle.id = "todoTitle";

    let newDate = document.createElement("p");
    newDate.textContent = `Due By: ${date}`;

    let newPriority = document.createElement("p");
    newPriority.textContent = priority;

    let newDesc = document.createElement("p");
    newDesc.textContent = desc;

    newTodo.appendChild(newTitle);
    newTodo.appendChild(newDate);
    newTodo.appendChild(newPriority);
    newTodo.appendChild(newDesc);

    let btnDelete = document.createElement("button");
    btnDelete.id = "btnDeleteTodo";
    btnDelete.textContent = "Delete To-Do";

    newTodo.appendChild(btnDelete);

    return newTodo;
};

export function AppendProjects() {
    let projects = GetProjects();

    for (const project of projects) {
        projectContainer.appendChild(CreateProjectElement(project));
    };  
};

export function AppendTodos(project) {
    let todos = GetTodos(project);

    for (const todo of todos) {
        main.appendChild(CreateTodoElement(todo[0], todo[1], todo[2], todo[3]));
    };  
}

export function ClearProjects() {
    projectContainer.innerHTML = "";
}

export function ClearTodos() {
    main.innerHTML = "";
}