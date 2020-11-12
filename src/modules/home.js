import { Project } from "./project"
import { TodoData } from "./todoData";
import { TabGenerator } from "./DOM/tab-generator";
import {ProjectExplorer} from "./project-explorer";
import {NotesExplorer} from "./notes-explorer";
import {ProjectManager} from "./projectManager";

function loadHome(appElement) {
    //Create some test projects and todo lists
    let newTodo = new TodoData("Boopy", "Hello I am a list!");
    let newTodo2 = new TodoData("Hello I am a tab", "Hello I am a list 2!");
    
    ProjectManager.addProject(new Project("Hi Kez", [newTodo, newTodo2]));
    ProjectManager.addProject(new Project("Boop", []));

    //Generate DOM code for the project tabs and todo list tabs
    const tab = TabGenerator.generateTodoTab(ProjectManager.getProject(0).todos[0]);
    const tab1 = TabGenerator.generateTodoTab(ProjectManager.getProject(0).todos[1]);
    
    //Generate project tabs
    const projectTabs = [];
    for(let i = 0; i < ProjectManager.getNum(); i++) {
        let currentProject = ProjectManager.getProject(i);
        projectTabs.push(TabGenerator.generateProjectTab(currentProject));
    }

    for(let k = 0; k < projectTabs.length; k++) {
        ProjectExplorer.addTab(projectTabs[k]);
    }

    NotesExplorer.addTab(tab);
    NotesExplorer.addTab(tab1);
}



export { loadHome }