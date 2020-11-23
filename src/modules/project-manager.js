import {ProjectData} from "./project-data";
import {TodoData} from "./todo-data";

const ProjectManager = (() => {
    let _projects = [];
    
    function addProject(ProjectData) {
        ProjectData.id = _projects.length;
        _projects.push(ProjectData);
    }

    function getProject(id) {
        return _projects[id];
    }

    function getNum() {
        return _projects.length;
    }

    function getProjects() {
        return _projects;
    }

    function loadProjects(projects) {
        _projects = [];
        projects.forEach(project => {
            const newProj = ProjectData.fromObject(project);
            const newTodos = [];
            newProj.todos.forEach((todo) => {
                newTodos.push(TodoData.fromObject(todo));
            });
            newProj.loadTodos(newTodos);
            addProject(newProj);
        });
    }

    return {addProject, getProject, getProjects, getNum, loadProjects}
})();

export {ProjectManager}