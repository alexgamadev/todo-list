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

    return {addProject, getProject, getProjects, getNum}
})();

export {ProjectManager}