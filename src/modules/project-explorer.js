import { ProjectDOM } from "./DOM/project-DOM";

const ProjectExplorer = (() => {
    const explorerDiv = document.getElementById("project-explorer");
    
    function addTab(tab) {
        explorerDiv.appendChild(tab);
    }

    function loadProject(project) {
        const projTab = ProjectDOM.generateTab(project);
        addTab(projTab);
    }

    function loadProjects(projects) {
        projects.forEach(project => {
            const projTab = ProjectDOM.generateTab(project);
            addTab(projTab);
        });
    }

    return {loadProject, loadProjects}
})();

export {ProjectExplorer}