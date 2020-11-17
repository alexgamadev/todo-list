import { ProjectData } from "./project-data"
import { TodoData } from "./todo-data";
import { ProjectExplorer } from "./project-explorer";
import { NotesExplorer } from "./notes-explorer";
import { ProjectManager } from "./project-manager";


function loadHome(appElement) {
    let checklist1 = new Map();
    checklist1.set("Item 1", false);
    checklist1.set("Item 2", true);
    checklist1.set("Item 3", false);
    checklist1.set("Item 4", false);
    checklist1.set("Item 5", false);
    checklist1.set("Item 6", false);
    checklist1.set("Item 7", true);
    checklist1.set("Item 8", false);
    checklist1.set("Item 9", false);
    checklist1.set("Item 10", false);
    checklist1.set("Item 11", false);
    checklist1.set("Item 12", true);
    checklist1.set("Item 13", false);
    checklist1.set("Item 14", false);
    checklist1.set("Item 15", false);
    //Create some test projects and todo lists
    let newTodo = new TodoData("Boopy", "Hello I am a list!", checklist1);
    let newTodo2 = new TodoData("Hello I am a tab", "Hello I am a list 2!");
    let newProject = new ProjectData("Hi Kez", [newTodo, newTodo2]);
    let newProject2 = new ProjectData("Boop", [newTodo2]);
    
    //
    ProjectManager.addProject(newProject);
    ProjectManager.addProject(newProject2);
    
    //Generate project tabs
    ProjectExplorer.loadProjects(ProjectManager.getProjects());

    // NotesExplorer.openTodo(newTodo);
    // NotesExplorer.openTodo(newTodo2);
}



export { loadHome }