import { NotesExplorer } from "../notes-explorer";
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
        projectTitle.classList.add("unselected");

        //Create project selection arrow
        const arrow = document.createElement("i");
        arrow.classList.add("fas");
        arrow.classList.add("fa-angle-right");

        //Create title name
        const name = document.createElement("span");
        name.innerText = projectData.name;

        const addButton = Utility.CreateElementFromHTML(`<i class="fas fa-plus" aria-hidden="true"></i>`);
        addButton.classList.add("align-right");
        addButton.addEventListener('click', ((e) => {
            e.stopPropagation();
            alert("Create new project");
        }));
        

        //Add arrow and title to container
        projectTitle.appendChild(arrow);
        projectTitle.appendChild(name);
        projectTitle.appendChild(addButton);

        //Create container where project list tabs will be stored
        const listContainer = document.createElement("div");
        listContainer.classList.add("list-container");
        listContainer.classList.add("closed");

        //Generate 
        loadTodoDocLinks(listContainer, projectData.todos);
 
        projectTitle.addEventListener('click', (({currentTarget}) => {
            toggleSelected(currentTarget.parentNode);
        }));

        /* ================================================================== */

        //Fill project container
        projectTab.appendChild(projectTitle);
        projectTab.appendChild(listContainer);

        projectData.addTabDOM(projectTab);

        return projectTab;
    };

    const toggleSelected = (projectTab) => {
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
        }
        else if(classList.contains("selected")) {
            classList.add("unselected");
            classList.remove("selected");

            //Move to own functions
            projectTitle.children[0].classList.add("fa-angle-right");
            projectTitle.children[0].classList.remove("fa-angle-down");
            projectTab.children[1].classList.remove("opened");
            projectTab.children[1].classList.add("closed"); 
        }
    }

    const loadTodoDocLinks = (listContainer, todos) => {
        todos.forEach(todo => {
            listContainer.appendChild(generateTodoDocLink(todo));
        });
    };

    const generateTodoDocLink = (todo) => {
        const docDiv = document.createElement("div");
        docDiv.classList.add("todo-doc");

        const docIcon = document.createElement("i");
        docIcon.classList.add("far");
        docIcon.classList.add("fa-file-alt");

        const docTitle = document.createElement("span");
        docTitle.innerText = todo.title;

        const docCloseButton = Utility.CreateElementFromHTML(`<i class="fas fa-times" aria-hidden="true"></i>`);
        docCloseButton.classList.add("align-right");
        docCloseButton.addEventListener('click', ((e) => {
            e.stopPropagation();
            alert("Delete todo list");
        }));

        docDiv.appendChild(docIcon);
        docDiv.appendChild(docTitle);
        docDiv.appendChild(docCloseButton);

        docDiv.addEventListener('click', (() => {
             NotesExplorer.openTodo(todo);
        }));

        return docDiv;
    };

    return {generateTab}
})();

export {ProjectDOM}