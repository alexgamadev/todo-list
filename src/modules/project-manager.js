import {ProjectData} from "./project-data";
import {TodoData} from "./todo-data";

const ProjectManager = (() => {
    let _projects = [];
    
    function addProject(ProjectData) {
        //Generate project ID as index of projects array
        //Would need to be generated differently if actually using a backend
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

        //Covert generic project objects into actual project data
        projects.forEach(project => {
            const newProj = ProjectData.fromObject(project);
            const newTodos = [];

            //Covert generic todo objects into actual todo data
            newProj.todos.forEach((todo) => {
                newTodos.push(TodoData.fromObject(todo));
            });

            //Add all converted todos to the project and add to project manager
            newProj.loadTodos(newTodos);
            addProject(newProj);
        });
    }

    return {addProject, getProject, getProjects, getNum, loadProjects}
})();

export {ProjectManager}