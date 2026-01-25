import "./styles.css";

import { AddProject, AddTodo, DeleteProject, DeleteTodo } from "./dataHandler";
import { ClearProjects, AppendProjects, ClearTodos, AppendTodos, ShowPanel, HidePanel } from "./createElements";

const projectForm = document.getElementById("formProject");
const todoForm = document.getElementById("todoForm");
const btnDelete = document.getElementById("btnDelete");

let projectIndicator = document.getElementById("projectIndicator");

let currentProject;

projectForm.addEventListener('submit', e => {
    e.preventDefault();
    AddProject(projectForm.project_title.value);
    ClearProjects();
    AppendProjects();
});

todoForm.addEventListener('submit', e => {
    e.preventDefault();
    AddTodo(currentProject, todoForm.todo_title.value, todoForm.todo_date.value, todoForm.todo_priority.value, todoForm.todo_desc.value);
    ClearTodos();
    AppendTodos(currentProject);
});

btnDelete.addEventListener('click', () => {
    DeleteProject(currentProject);
    HidePanel();
}); 

document.addEventListener('click', e => {
    if (e.target.classList.contains("project")) {
        currentProject = e.target.textContent;
        projectIndicator.textContent = currentProject;
        ShowPanel();
        ClearTodos();
        AppendTodos(currentProject);
    };
    if (e.target.id == "btnDeleteTodo") {
        DeleteTodo(currentProject, e.target.parentElement.querySelector("#todoTitle").textContent);
        e.target.parentElement.remove();
    }
});

AppendProjects();