const ProjectManager = (() => {
    let _projects = [];
    
    function addProject(projectData) {
        projectData.id = _projects.length;
        _projects.push(projectData);
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