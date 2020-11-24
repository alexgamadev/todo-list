import { ProjectManager } from "./project-manager";
import {TodoData} from "./todo-data"; 

export default class DataStorage {
    /* Saved data to local storage*/
    static SaveData() {
        //Get all projects
        const projects = ProjectManager.getProjects();

        //Iterate through projects to convert any necessary objects to JSON
        projects.forEach((project) => {
            project.todos.forEach((todo) => {
                todo.checklist = JSON.stringify(Array.from(todo.checklist.entries()));
            });
        });

        //Convert all projects to JSON and store in local storage
        localStorage.setItem("Projects", JSON.stringify(ProjectManager.getProjects()));
    }

    /* Load saved data from previous visits to site */
    static LoadData() {
        //Get JSON data from local storage and convert back to normal projects
        return JSON.parse(localStorage.getItem("Projects"));
    }


    /* Generate some mock data to display when first visiting site */
    static LoadMockData() {
        //Create a mock checklist
        let checklist1 = new Map();
        checklist1.set("You", false);
        checklist1.set("Can", true);
        checklist1.set("Click", false);
        checklist1.set("These", false);
        checklist1.set("Items", false);

        //Create some test projects and todo lists
        let newTodo = new TodoData("Example Todo", "Write a description here!", checklist1);
        let newProject = new ProjectData("Default Project", [newTodo]);

        return [newProject];
    }
}