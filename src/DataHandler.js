
// Projects
 
function GetProjects() {
    return localStorage.getItem("projects");
};

export function CreateNewProject(title) {
    let projects = JSON.parse(GetProjects()) || [];
    projects.push(title);
    localStorage.setItem("projects", JSON.stringify(projects));
}

// To-dos

function GetTodos(project) {
    return localStorage.getItem(project);
}

export function CreateNewTodo(project) {
    
};