import { ProjectManager } from "./project-manager";

export default class DataStorage {
    static SaveData() {
        const projects = ProjectManager.getProjects();
        projects.forEach((project) => {
            project.todos.forEach((todo) => {
                todo.checklist = JSON.stringify(Array.from(todo.checklist.entries()));
            });
        });

        console.log(ProjectManager.getProjects());
        console.log(JSON.stringify(ProjectManager.getProjects()));
        localStorage.setItem("Projects", JSON.stringify(ProjectManager.getProjects()));
    }

    static LoadData() {
        console.log(JSON.parse(localStorage.getItem("Projects")));
        return JSON.parse(localStorage.getItem("Projects"));
    }
}