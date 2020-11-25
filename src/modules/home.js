import ProjectExplorer from './project-explorer';
import ProjectManager from './project-manager';
import DataStorage from './data-storage';

export default function loadHome() {
  // Called when window is first loaded
  window.addEventListener('load', () => {
    const projects = DataStorage.LoadData();

    // If there is any data stored in local storage load it else load mock data
    if (projects?.length > 0) {
      ProjectManager.loadProjects(projects);
    } else {
      ProjectManager.loadProjects(DataStorage.LoadMockData());
    }
    // Generate project tabs
    ProjectExplorer.loadProjects(ProjectManager.getProjects());
  }, false);

  // Just before site is unloaded, save any necesary data to local storage
  window.addEventListener('unload', () => {
    DataStorage.SaveData();
  }, false);
}
