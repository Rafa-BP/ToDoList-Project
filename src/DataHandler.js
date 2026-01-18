class Todo {
    constructor(title, priority) {
        this.title,
        this.priority
    };
};

function GetProjects() {
    return localStorage.getItem("projects");
};

export function CreateNewProject(title) {
    let projects = JSON.parse(GetProjects()) || [];
    projects.push(title);
    localStorage.setItem("projects", JSON.stringify(projects));
}

export function CreateNewTodo(title) {

};