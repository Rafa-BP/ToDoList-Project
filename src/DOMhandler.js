
const projectsContainer = document.getElementById("projects-container")

function AppendProject(project) {
    projectsContainer.appendChild(project);
}

export function CreateProjectElement(title) {
    let newProject = document.createElement("nav");
    newProject.id = "project";

    let newTitle = document.createElement("p");
    newTitle.textContent = title;

    newProject.appendChild(newTitle);

    AppendProject(newProject);
};
