import { ProjectData } from "./project-data"
import { TodoData } from "./todo-data";
import { ProjectExplorer } from "./project-explorer";
import { NotesExplorer } from "./notes-explorer";
import { ProjectManager } from "./project-manager";

function loadHome(appElement) {
    //Create todo list data
    //Create project data
    //Create project DOM

    //Create some test projects and todo lists
    let newTodo = new TodoData("Boopy", "Hello I am a list!");
    let newTodo2 = new TodoData("Hello I am a tab", "Hello I am a list 2!");
    
    ProjectManager.addProject(new ProjectData("Hi Kez", [newTodo, newTodo2]));
    ProjectManager.addProject(new ProjectData("Boop", [newTodo2]));
    
    //Generate project tabs
    ProjectExplorer.loadProjects(ProjectManager.getProjects());

    NotesExplorer.openTodo(newTodo);
    NotesExplorer.openTodo(newTodo2);
}



export { loadHome }