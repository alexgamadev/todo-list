import { ProjectDOM } from "./DOM/project-DOM";
import Utility from "./utils";

export const ProjectExplorer = (() => {
    const explorerDiv = document.getElementById("project-explorer");
    
    function addTab(tab) {
        explorerDiv.appendChild(tab);
    }

    function loadProject(project) {
        const projTab = ProjectDOM.generateTab(project);
        addTab(projTab);
    }

    function loadProjects(projects) {
        clearProjects();
        projects.forEach(project => {
            const projTab = ProjectDOM.generateTab(project);
            addTab(projTab);
        });
    }

    function clearProjects() {
        Utility.RemoveChildNodes(explorerDiv);
    }

    return {loadProject, loadProjects}
})();