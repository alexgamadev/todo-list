import { NotesExplorer } from "../notes-explorer";
import {ProjectManager} from "../project-manager";
import {PanelDOM} from "./panel-DOM";

import Utility from "../utils";

const ProjectDOM = (() => {
    /*=============================================
    Create tab, delete tab, get tab, add todo, update todo, remove todo
    ===============================================*/
    const generateTab = (projectData) => {
        //Create project tab container
        const projectTab = document.createElement("div");
        projectTab.classList.add("project-container");
        projectTab.attributes["data-projectId"] = projectData.id;

        //Create container for title elements
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");
        if(!projectData.isOpen) {
            projectTitle.classList.add("unselected");
        } else {
            projectTitle.classList.add("selected");
        }

        //Create project selection arrow
        const arrow = document.createElement("i");
        arrow.classList.add("fas");
        if(projectData.isOpen) {
            arrow.classList.add("fa-angle-down");
        } else {
            arrow.classList.add("fa-angle-right");
        }

        //Create title name
        const name = document.createElement("span");
        name.innerText = projectData.name;

        const addButton = Utility.CreateElementFromHTML(`<i class="fas fa-plus" aria-hidden="true"></i>`);
        addButton.classList.add("align-right");
        addButton.addEventListener('click', ((e) => {
            e.stopPropagation();
            PanelDOM.createTodoPanel(projectData.id);
        }));
        

        //Add arrow and title to container
        projectTitle.appendChild(arrow);
        projectTitle.appendChild(name);
        projectTitle.appendChild(addButton);

        //Create container where project list tabs will be stored
        const listContainer = document.createElement("div");
        listContainer.classList.add("list-container");

        if(projectData.isOpen) {
            listContainer.classList.add("opened");
        } else {
            listContainer.classList.add("closed");
        }

        //Generate 
        loadTodoDocLinks(listContainer, projectData.id, projectData.todos);
 
        projectTitle.addEventListener('click', (({currentTarget}) => {
            toggleSelected(currentTarget.parentNode, projectData);
        }));

        /* ================================================================== */

        //Fill project container
        projectTab.appendChild(projectTitle);
        projectTab.appendChild(listContainer);

        projectData.addTabDOM(projectTab);

        return projectTab;
    };

    const toggleSelected = (projectTab, projectData) => {
        let projectTitle = projectTab.children[0];

        let classList = projectTitle.classList;

        if(classList.contains("unselected")) {
            classList.remove("unselected");
            classList.add("selected");

            //Move to own functions
            projectTitle.children[0].classList.remove("fa-angle-right");
            projectTitle.children[0].classList.add("fa-angle-down");
            projectTab.children[1].classList.remove("closed");
            projectTab.children[1].classList.add("opened");

            projectData.isOpen = true;
        }
        else if(classList.contains("selected")) {
            classList.add("unselected");
            classList.remove("selected");

            //Move to own functions
            projectTitle.children[0].classList.add("fa-angle-right");
            projectTitle.children[0].classList.remove("fa-angle-down");
            projectTab.children[1].classList.remove("opened");
            projectTab.children[1].classList.add("closed"); 

            projectData.isOpen = false;
        }
    }

    const loadTodoDocLinks = (listContainer, projectID, todos) => {
        todos.forEach(todo => {
            listContainer.appendChild(generateTodoDocLink(projectID, todo));
        });
    };

    const generateTodoDocLink = (projectID, todo) => {
        const docDiv = document.createElement("div");
        docDiv.classList.add("todo-doc");
        docDiv.attributes["data-project-id"] = projectID;

        const docIcon = document.createElement("i");
        docIcon.classList.add("far");
        docIcon.classList.add("fa-file-alt");

        const docTitle = document.createElement("span");
        docTitle.innerText = todo.title;

        const docCloseButton = Utility.CreateElementFromHTML(`<i class="fas fa-times" aria-hidden="true"></i>`);
        docCloseButton.classList.add("align-right");

        //Event listener to delete todo lists
        docCloseButton.addEventListener('click', ((e) => {
            e.stopPropagation();
            PanelDOM.deleteTodoPanel(e.target, projectID, todo);
        }));

        docDiv.appendChild(docIcon);
        docDiv.appendChild(docTitle);
        docDiv.appendChild(docCloseButton);

        docDiv.addEventListener('click', (() => {
            NotesExplorer.openTodo(todo);
        }));

        return docDiv;
    };

    const deleteTodoLink = (target, projectID, todo) => {
        //Get project containing todo
        const project = ProjectManager.getProject(projectID);
        //Close todo tab if open, remove todo from project and delete todo document link from project explorer
        NotesExplorer.closeTodo(todo);
        project.removeTodo(todo);
        target.parentNode.remove();
    }

    return {generateTab, deleteTodoLink, generateTodoDocLink}
})();

export {ProjectDOM}