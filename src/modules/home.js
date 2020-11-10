import { ProjectData } from "./projectData"
import { TodoData } from "./todoData";
import { TabGenerator } from "./DOM/tabGenerator";
import {loadProjExplorer} from "./projectExplorer";
import {NotesExplorer} from "./notesExplorer";

function loadHome(appElement) {
    const contentElement = document.createElement("div");
    contentElement.id = "content";
    appElement.appendChild(contentElement); 

    let projects = [];
    let newTodo = new TodoData("Boopy", "Hello I am a list!");
    let newTodo2 = new TodoData("Hello I am a tab", "Hello I am a list 2!");
    let newProject = new ProjectData("Hi Kez", [newTodo, newTodo2]);

    const tab = TabGenerator.generateTodoTab(newProject.todos[0]);
    const tab1 = TabGenerator.generateTodoTab(newProject.todos[1]);
    const projectTab = TabGenerator.generateProjectTab(newProject);

    const projExplorer = loadProjExplorer(contentElement);
    projExplorer.appendChild(projectTab);
    NotesExplorer.loadNotesExplorer(contentElement);
    NotesExplorer.addTab(tab);
    NotesExplorer.addTab(tab1);
}



export { loadHome }