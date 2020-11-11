import { ProjectData } from "./projectData"
import { TodoData } from "./todoData";
import { TabGenerator } from "./DOM/tabGenerator";
import {loadProjExplorer} from "./projectExplorer";
import {NotesExplorer} from "./notesExplorer";
import {ProjectManager} from "./projectManager";

function loadHome(appElement) {
    //Create content div for laying out page
    const contentElement = document.createElement("div");
    contentElement.id = "content";
    appElement.appendChild(contentElement); 

    //Create some test projects and todo lists
    let newTodo = new TodoData("Boopy", "Hello I am a list!");
    let newTodo2 = new TodoData("Hello I am a tab", "Hello I am a list 2!");
    ProjectManager.addProject(new ProjectData("Hi Kez", [newTodo, newTodo2]));
    ProjectManager.addProject(new ProjectData("Boop", []));

    //Generate DOM code for the project tabs and todo list tabs
    const tab = TabGenerator.generateTodoTab(ProjectManager.getProject(0).todos[0]);
    const tab1 = TabGenerator.generateTodoTab(ProjectManager.getProject(0).todos[1]);
    const projectTabs = [];
    for(let i = 0; i < ProjectManager.getNum(); i++) {
        let currentProject = ProjectManager.getProject(i);
        projectTabs.push(TabGenerator.generateProjectTab(currentProject));
    }

    //Create the project explorer and add project tabs
    const projExplorer = loadProjExplorer(contentElement);
    for(let k = 0; k < projectTabs.length; k++) {
        projExplorer.appendChild(projectTabs[k]);
    }

    //Create the notes explorer and add note tabs
    NotesExplorer.loadNotesExplorer(contentElement);
    NotesExplorer.addTab(tab);
    NotesExplorer.addTab(tab1);
}



export { loadHome }