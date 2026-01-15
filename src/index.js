import "./styles.css";

import { CreateNewProject } from "./DataHandler";

const btnNewProject = document.getElementById("btnNewProject");

btnNewProject.addEventListener('click', () => {
    CreateNewProject("cool");
});