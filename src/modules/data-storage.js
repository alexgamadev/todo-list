import { ProjectManager } from "./project-manager";

export default class DataStorage {
    static SaveData() {
        const projects = ProjectManager.getProjects();
        projects.forEach((project) => {
            project.todos.forEach((todo) => {
                todo.checklist = JSON.stringify(Array.from(todo.checklist.entries()));
            });
        });
        localStorage.setItem("Projects", JSON.stringify(ProjectManager.getProjects()));
    }

    static LoadData() {
        return JSON.parse(localStorage.getItem("Projects"));
    }
}