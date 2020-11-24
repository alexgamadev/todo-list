import {PanelDOM} from "./panel-DOM";
import {ProjectData} from "../project-data";
import {ProjectExplorer} from "../project-explorer";
import {ProjectManager} from "../project-manager";

export const HeaderDOM = (() => {
    const header = document.getElementById("header");
    const newProjBtn = header.querySelector(".new-project");

    newProjBtn.addEventListener('click', () => {
        PanelDOM.createPanel("Enter name of new project:", (value) => {
            let newProject = new ProjectData(value, []);
            ProjectManager.addProject(newProject);
            ProjectExplorer.loadProject(newProject);
        });
    });
})();