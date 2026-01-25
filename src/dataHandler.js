import { AppendProjects, AppendTodos, ClearProjects, ClearTodos, DeleteProjectElement } from "./createElements";

export function GetProjects() {
    return JSON.parse(localStorage.getItem("projects"));
};

export function AddProject(title) {
    let projects = GetProjects() || [];
    projects.push(title);
    localStorage.setItem("projects", JSON.stringify(projects));
};

export function GetTodos(project) {
    return JSON.parse(localStorage.getItem(project)) || [];
};

export function AddTodo(project, title, date, priority, desc) {
    let todos = GetTodos(project) || [];
    todos.push([title, date, priority, desc]);
    localStorage.setItem(project, JSON.stringify(todos));
};
    
export function DeleteProject(project) {
    let projects = GetProjects();
    const index = projects.indexOf(project);
    projects.splice(index, 1);
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.removeItem(project);
    ClearProjects();
    AppendProjects();
};

export function DeleteTodo(project, title) {
    let todos = GetTodos(project)
    let i = 0;
    for (i; i < todos.length; i++) {
        if (todos[i][0] == title) {
            todos.splice(i, 1);
            break;
        };
    };
    localStorage.setItem(project, JSON.stringify(todos));
    ClearTodos();
    AppendTodos(project);
};  