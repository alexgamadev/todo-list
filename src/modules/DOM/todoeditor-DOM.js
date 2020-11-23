import Utility from "../utils";
import {PanelDOM} from "./panel-DOM"

const TodoEditorDOM = (() => {
    /*=============================================
    Generate Editor Content and Clear Editor Content
    ===============================================*/
    const generateEditor = (todo) => {
        const editor = document.getElementById("notes-editor");

        editor.appendChild(generateContent(todo));
        editor.appendChild(generateDetails(todo));
    };

    const clearEditor = () => {
        //Find content container
        const content = document.getElementById("notes-content");
        Utility.RemoveChildNodes(content);

        const details = document.getElementById("notes-details");
        Utility.RemoveChildNodes(details);
    }

    const generateContent = (todo) => {
        //Find content container
        const content = document.getElementById("notes-content");

        const notesContainer = createNotesContainer(todo);
        const listContainer = createChecklistContainer(todo);
        
        content.appendChild(notesContainer);
        content.appendChild(listContainer);

        return content;
    };

    const generateDetails = (todo) => {
        //Find details container
        const details = document.getElementById("notes-details");

        //Placeholder details
        details.innerHTML = `<div>
            <h3>Due Date</h3>
            <input type="date" class="due-date">
            </div>`

        const priorityTitle = document.createElement("div");
        priorityTitle.id = "priority-title"
        priorityTitle.appendChild(Utility.CreateElementFromHTML("<h3>Priority:</h3>"));
        
        const priorityMessage = document.createElement("h3");
        updatePriorityLabel(priorityMessage, todo.priority);

        priorityTitle.appendChild(priorityMessage);

        const prioritySelect = document.createElement("div");
        prioritySelect.id = "priority-selection";

        prioritySelect.innerHTML = 
        `
            <button class="priority-high tooltip" data-priority="3">
                <span class="tooltiptext">High</span>
            </button>
            <button class="priority-medium tooltip" data-priority="2">
                <span class="tooltiptext">Medium</span>
            </button>
            <button class="priority-low tooltip" data-priority="1">
                <span class="tooltiptext">Low</span>
            </button>
        `;

        const priorityBtns = prioritySelect.querySelectorAll(".tooltip");
        priorityBtns.forEach((button) => {
            button.addEventListener('click', ({target}) => {
                const priority = target.attributes["data-priority"].value;
                todo.priority = priority;
                updatePriorityLabel(priorityMessage, todo.priority);
            });
        });

        details.appendChild(priorityTitle);
        details.appendChild(prioritySelect);

        console.log(priorityTitle);

        return details;
    };

    const createNotesContainer = (todo) => {
        const notesContainer = document.createElement("div");
        notesContainer.classList.add("notes-container");

        const notesHeading = document.createElement("h3");
        notesHeading.innerText = "Notes";

        const textArea = document.createElement("textarea");
        textArea.classList.add("notes");
        textArea.value = todo.notes;

        textArea.addEventListener("focusout", function(){
            console.log(textArea.value);
            todo.notes = textArea.value;
        });

        notesContainer.appendChild(notesHeading);
        notesContainer.appendChild(textArea);

        return notesContainer;
    };

    const createChecklistContainer = (todo) => {
        const listContainer = document.createElement("div");

        listContainer.classList.add("checklist-container");

        const listHeader = document.createElement("div");
        listHeader.classList.add("list-header");
    
        const listHeading = document.createElement("h3");
        listHeading.innerText = "Checklist";

        const list = document.createElement("ul");

        const addButton = Utility.CreateElementFromHTML(`<i class="fas fa-plus" aria-hidden="true"></i>`);
        addButton.addEventListener('click', () => {
            PanelDOM.createPanel("Enter Checklist Item Title:", (value) => {
                todo.checklist.set(value, false);
                TodoEditorDOM.addChecklistItem(todo, list, false, value);
            });
        });

        listHeader.appendChild(listHeading);
        listHeader.appendChild(addButton);

        const checkIcon = Utility.CreateElementFromHTML(`<i class="fas fa-check-circle item-icon"></i>`);
        const crossIcon = Utility.CreateElementFromHTML(`<i class="fas fa-times-circle item-icon"></i>`);
        
        //If checklist exists and isn't empty
        if(todo.checklist?.size) {
            todo.checklist.forEach(function(value, item){
                addChecklistItem(todo, list, value, item);
            });
        }

        listContainer.appendChild(listHeader);
        listContainer.appendChild(list);

        return listContainer;
    };

    function addChecklistItem(todo, list, value, item) {
        //Create list item for each item in the checklist
        const listItem = document.createElement("li");
        if(value) {
            listItem.classList.add("checked");
            const checkIcon = Utility.CreateElementFromHTML(`<i class="fas fa-check-circle item-icon"></i>`);
            listItem.appendChild(checkIcon);
        } else {
            listItem.classList.add("unchecked");
            const crossIcon = Utility.CreateElementFromHTML(`<i class="fas fa-times-circle item-icon"></i>`);
            listItem.appendChild(crossIcon);
        }

        //Toggle checklist item and save value
        listItem.addEventListener("click", (function({currentTarget}){
            let classList = currentTarget.classList;
            const icon = currentTarget.querySelector(".item-icon");
            if(classList.contains("checked")) {
                classList.remove("checked");
                classList.add("unchecked");
                icon.classList.remove("fa-check-circle");
                icon.classList.add("fa-times-circle");
                todo.checklist.set(item, false);
            } else if (classList.contains("unchecked")) {
                classList.remove("unchecked");
                classList.add("checked");
                icon.classList.add("fa-check-circle");
                icon.classList.remove("fa-times-circle");
                todo.checklist.set(item, true);
            }
        }));

        //Add name of checklist item
        const text = document.createElement("span");
        text.innerText = item;

        const deleteButton = Utility.CreateElementFromHTML(`<i class="fas fa-times" aria-hidden="true"></i>`);
        deleteButton.classList.add("align-right");

        //Event listener to delete todo lists
        deleteButton.addEventListener('click', ((e) => {
            e.stopPropagation();
            PanelDOM.confirmationPanel("Are you sure you want to delete this item?", () => {
                console.log(item);
                console.log(todo.checklist);
                todo.checklist.delete(item);
                listItem.remove();
            });
        }));

        listItem.appendChild(text);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    }

    function updatePriorityLabel(priorityLabel, priority) {
        console.log(priority);
        priorityLabel.classList.remove(...priorityLabel.classList);
        priorityLabel.classList.add(`priority-${priority}`);
        priorityLabel.innerText = priority;
    }

    return {generateEditor, clearEditor, addChecklistItem};
})();

export {TodoEditorDOM};