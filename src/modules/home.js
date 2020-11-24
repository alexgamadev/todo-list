import { ProjectData } from "./project-data"
import { TodoData } from "./todo-data";
import { ProjectExplorer } from "./project-explorer";
import { ProjectManager } from "./project-manager";
import DataStorage from "./data-storage";


function loadHome(appElement) {
    window.addEventListener("load", function() {
        const projects = DataStorage.LoadData();
        if(projects?.length > 0) {
            ProjectManager.loadProjects(projects);
        } else {
            generateMockData();
        }
        //Generate project tabs
        ProjectExplorer.loadProjects(ProjectManager.getProjects());
    }, false); 

    window.addEventListener("unload", function() {
        DataStorage.SaveData();
    }, false);

    function generateMockData() {
        let checklist1 = new Map();
        checklist1.set("You", false);
        checklist1.set("Can", true);
        checklist1.set("Check", false);
        checklist1.set("These", false);
        checklist1.set("Items", false);

        //Create some test projects and todo lists
        let newTodo = new TodoData("Example Todo", "Write a description here!", checklist1);
        let newProject = new ProjectData("Default Project", [newTodo]);
        
        ProjectManager.addProject(newProject);
    }
}



export { loadHome }