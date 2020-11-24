import { NotesExplorer } from "../notes-explorer";
import {ProjectManager} from "../project-manager";
import {ProjectExplorer} from "../project-explorer";
import {TodoData} from "../todo-data";
import {PanelDOM} from "./panel-DOM";

import Utility from "../utils";

const ProjectDOM = (() => {

    const generateTab = (projectData) => {
        //Create project tab container and add attribute with ID
        const projectTab = document.createElement("div");
        projectTab.classList.add("project-container");
        projectTab.attributes["data-projectId"] = projectData.id;

        //Create container for title elements
        const projectTitle = document.createElement("div");
        projectTitle.classList.add("project-title");

        //If project tab was already open then make sure it's open by default 
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

        // Functionality to create new todo
        addButton.addEventListener('click', ((e) => {
            //Prevent any parent event listeners from being called
            e.stopPropagation();
            //Open panel to enter todo title
            PanelDOM.createPanel("Enter todo title:", (value) => {
                //Create new empty todo with entered title and add to project
                let newTodo = new TodoData(value, "");
                projectData.addTodo(newTodo); 

                //Reload project explorer to display new todo
                ProjectExplorer.loadProjects(ProjectManager.getProjects());

                //Open newly created todo 
                NotesExplorer.openTodo(newTodo);
            });
        }));

        //Add arrow and title to container
        projectTitle.appendChild(arrow);
        projectTitle.appendChild(name);
        projectTitle.appendChild(addButton);

        //Create container where project list tabs will be stored
        const listContainer = document.createElement("div");
        listContainer.classList.add("list-container");

        //If project was already open then open list of todos by default
        if(projectData.isOpen) {
            listContainer.classList.add("opened");
        } else {
            listContainer.classList.add("closed");
        }

        //Generate the clickable links for each todo in the project 
        loadTodoDocLinks(listContainer, projectData.id, projectData.todos);
 
        //Toggle for project tab to open and close it when clicked
        projectTitle.addEventListener('click', (({currentTarget}) => {
            toggleSelected(currentTarget.parentNode, projectData);
        }));

        projectTab.appendChild(projectTitle);
        projectTab.appendChild(listContainer);

        return projectTab;
    };

    const toggleSelected = (projectTab, projectData) => {

        let projectTitle = projectTab.children[0];
        let classList = projectTitle.classList;

        //Toggle stylings when project selected or not
        if(classList.contains("unselected")) { 
            //Project title styling
            classList.remove("unselected");
            classList.add("selected");

            //Project arrow styling
            projectTitle.children[0].classList.remove("fa-angle-right");
            projectTitle.children[0].classList.add("fa-angle-down");

            //List container styling
            projectTab.children[1].classList.remove("closed");
            projectTab.children[1].classList.add("opened");

            //Store selected state of project
            projectData.isOpen = true;
        }
        else if(classList.contains("selected")) {
            //Project title styling
            classList.add("unselected");
            classList.remove("selected");

            //Project arrow styling
            projectTitle.children[0].classList.add("fa-angle-right");
            projectTitle.children[0].classList.remove("fa-angle-down");

            //List container styling
            projectTab.children[1].classList.remove("opened");
            projectTab.children[1].classList.add("closed"); 

            //Store selected state of project
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

        const priorityIcon = document.createElement("div");
        priorityIcon.classList.add("priority-icon", todo.priority);

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
            PanelDOM.confirmationPanel("Are you sure you want to delete this todo?", () => {
                deleteTodoLink(e.target, projectID, todo);
            });
        }));

        docDiv.appendChild(priorityIcon);
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