import { ProjectData } from "./projectData"
import { TodoData } from "./todoData";
import { TabGenerator } from "./DOM/tabGenerator";

function init() {
    let projects = [];
    let newTodo = new TodoData("List 1", "Hello I am a list!");
    let newProject = new ProjectData("Hi Kez", [newTodo]);

    const tab = TabGenerator.generateTodoTab(newTodo);
    console.log(newProject);
    const projectTab = TabGenerator.generateProjectTab(newProject);

    console.log(tab);
    console.log(projectTab);

    return projectTab;
}



export { init }