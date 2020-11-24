import { ProjectDOM } from "./DOM/project-DOM";
import Utility from "./utils";

export const ProjectExplorer = (() => {
    const explorerDiv = document.getElementById("project-explorer");

    function loadProject(project) {
        const projTab = ProjectDOM.generateTab(project);
        explorerDiv.appendChild(projTab);
    }

    function loadProjects(projects) {
        //Clear all project tabs
        clearProjects();

        //Generate new tabs for each project and add to explorer
        projects.forEach(project => {
            const projTab = ProjectDOM.generateTab(project);
            explorerDiv.appendChild(projTab);
        });
    }

    function clearProjects() {
        Utility.RemoveChildNodes(explorerDiv);
    }

    return {loadProject, loadProjects}
})();