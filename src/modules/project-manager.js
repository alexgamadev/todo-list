/* eslint-disable no-underscore-dangle */
const ProjectManager = (() => {
  let _projects = [];

  function addProject(projectData) {
    const newProj = projectData;
    // Generate project ID as index of projects array
    // Would need to be generated differently if actually using a backend
    newProj.id = _projects.length;
    _projects.push(newProj);
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

    // Covert generic project objects into actual project data
    projects?.forEach((project) => {
      addProject(project);
    });
  }

  return {
    addProject, getProject, getProjects, getNum, loadProjects,
  };
})();

export default ProjectManager;
