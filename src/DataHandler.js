class Project {
    constructor(title) {
        this.title
    };
;}

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
    let newProject = new Project(title);

    let currentProjects = GetProjects();

    if (currentProjects) {
        let newList = JSON.stringify(currentProjects + newProject.title);
        localStorage.setItem("projects", newList);
    } else {
        let test = JSON.stringify(newProject.title);
        localStorage.setItem("projects", test);
    }
    
}

export function CreateNewTodo(title, ) {

};