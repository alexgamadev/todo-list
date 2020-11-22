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
    //Create some test projects and todo lists
    let newTodo = new TodoData("Boopy", "Hello I am a list!", checklist1);
    let newTodo2 = new TodoData("Hello I am a tab", "Hello I am a list 2!");
    let newTodo3 = new TodoData("Seperate project todo", "I am a todo in a seperate project!", checklist1);
    let newProject = new ProjectData("Hi Kez", [newTodo, newTodo2]);
    let newProject2 = new ProjectData("Boop", [newTodo3]);
    
    //
    ProjectManager.addProject(newProject);
    ProjectManager.addProject(newProject2);
    
    //Generate project tabs
    ProjectExplorer.loadProjects(ProjectManager.getProjects());

    // NotesExplorer.openTodo(newTodo);
    // NotesExplorer.openTodo(newTodo2);
}



export { loadHome }