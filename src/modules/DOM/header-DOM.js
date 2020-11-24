import {PanelDOM} from "./panel-DOM";
import {ProjectData} from "../project-data";
import {ProjectExplorer} from "../project-explorer";
import {ProjectManager} from "../project-manager";

export const HeaderDOM = (() => {
    const header = document.getElementById("header");
    const newProjBtn = header.querySelector(".new-project");

    //Functionality for new project button
    newProjBtn.addEventListener('click', () => {
        //Create panel to input project name
        PanelDOM.createPanel("Enter name of new project:", (value) => {
            //Create new project with entered name and load it in the project explorer  
            let newProject = new ProjectData(value, []);
            ProjectManager.addProject(newProject);
            ProjectExplorer.loadProject(newProject);
        });
    });
})();