
import { CreateNewProject } from "./DataHandler";

const projectsContainer = document.getElementById("projects-container")
const main = document.getElementById("container-main")

function AppendProject(project) {
    projectsContainer.appendChild(project);
}

export function ClearProjects() {
    projectsContainer.innerHTML = "";
}

export function CreateProjects() {
    let projects = JSON.parse(localStorage.getItem("projects")) || [];

    for (const project of projects) {
        CreateProjectElement(project);
    };
};

function CreateProjectElement(title) {
    let newProject = document.createElement("button");
    newProject.id = "project";
    newProject.textContent = title;

    AppendProject(newProject);
};

export function CreateProjectPrompt() {
    let newPrompt = document.createElement("section");
    newPrompt.id = "newProjectPrompt";

    let titleLabel = document.createElement("label");
    titleLabel.for = "newProjectTitle";
    titleLabel.textContent = "Title: "

    let titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "newProjectTitle";

    newPrompt.appendChild(titleLabel);
    newPrompt.appendChild(titleInput);

    let btnDiv = document.createElement("div");
    btnDiv.classList.add("container-row");

    let btnCreate = document.createElement("button");
    btnCreate.id = "btnAddProject";
    btnCreate.textContent = "Add";

    btnCreate.addEventListener('click', () => {
        let title = titleInput.value;

        CreateNewProject(title);
        CreateProjectElement(title);

        ClearProjects();
        CreateProjects();
    });

    let btnCancel = document.createElement("button");
    btnCancel.id = "btnCancelProject";
    btnCancel.textContent = "Cancel";

    btnCancel.addEventListener('click', () => {
        ClearProjects();
        CreateProjects();
    });


    btnDiv.appendChild(btnCreate);
    btnDiv.appendChild(btnCancel);

    newPrompt.appendChild(btnDiv);

    projectsContainer.appendChild(newPrompt);
};

