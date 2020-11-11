const ProjectManager = (() => {
    let _projects = [];
    
    function addProject(Project) {
        Project.id = _projects.length;
        _projects.push(Project);
    }

    function getProject(id) {
        return _projects[id];
    }

    function getNum() {
        return _projects.length;
    }

    return {addProject, getProject, getNum}
})();

export {ProjectManager}