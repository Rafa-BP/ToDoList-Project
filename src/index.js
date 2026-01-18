import "./styles.css";

import { CreateProjectPrompt, CreateProjects, ClearProjects } from "./DOMhandler";

const btnNewProject = document.getElementById("btnNewProject");;

btnNewProject.addEventListener('click', () => {
    ClearProjects();
    CreateProjects();
    CreateProjectPrompt();
});

document.addEventListener('click', e => {
    if (e.target.id == "project") {

    };
}); 

CreateProjects();