import { ProjectExplorer } from "../project-explorer";
import { ProjectManager } from "../project-manager";
import Utility from "../utils";
import {PanelDOM} from "./panel-DOM";
import { toDate, parseISO, differenceInDays, formatDistanceToNow, isValid, format} from 'date-fns';

const TodoEditorDOM = (() => {
    /* Generate both the content and details sections of the editor */
    const generateEditor = (todo) => {
        const editor = document.getElementById("notes-editor");

        editor.appendChild(generateContent(todo));
        editor.appendChild(generateDetails(todo));
    };

    /* Clear both the content and details sections of the editor */
    const clearEditor = () => {
        const content = document.getElementById("notes-content");
        Utility.RemoveChildNodes(content);

        const details = document.getElementById("notes-details");
        Utility.RemoveChildNodes(details);
    }

    const generateContent = (todo) => {
        const content = document.getElementById("notes-content");

        //Create description element and checklist element
        const notesContainer = createNotesContainer(todo);
        const listContainer = createChecklistContainer(todo);
        
        content.appendChild(notesContainer);
        content.appendChild(listContainer);

        return content;
    };

    const generateDetails = (todo) => {
        const details = document.getElementById("notes-details");

        /* ===== Due Date Section ===== */
        const dateTitle = document.createElement("div");
        dateTitle.id = "date-title";

        let dateHeading = document.createElement("h3");
        //If todo has a valid due date then display time until it
        if(isValid(todo.dueDate)) {
            //If due date is in future display time until due date else display overdue 
            if(differenceInDays(todo.dueDate, new Date()) >= 0) {
                dateHeading.innerText = `Due Date (Due in ${formatDistanceToNow(todo.dueDate)})`;
            } else {
                dateHeading.innerText = `Due Date (Overdue)`;
            }
        }
        else {
            dateHeading.innerText = "Due Date";
        }
        
        dateTitle.appendChild(dateHeading);


        const dateInput = document.createElement("input")
        dateInput.type = "date";
        dateInput.classList.add("due-date");

        //If todo has a value due date then set the date input to that date
        if(isValid(todo.dueDate)) {
            dateInput.value = format(todo.dueDate, "yyyy-MM-dd");
        }

        dateInput.addEventListener("change", ({target}) => {
            //Get date inputed
            const selectedDate = toDate(parseISO(target.value));
            todo.dueDate = selectedDate;

            //Get difference between inputed date and current date
            const difference = differenceInDays(selectedDate, new Date());
            //If selected date is in the future show the time until it
            if(difference > 0) {
                dateHeading.innerText = `Due Date (Due in ${formatDistanceToNow(selectedDate)})`;
            } else {
                dateHeading.innerText = `Due Date (Overdue)`;
            }
        });
        /* =============================== */

        
        /* ===== Priority Selection ===== */
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
                ProjectExplorer.loadProjects(ProjectManager.getProjects());
            });
        });

        /* =============================== */

        details.appendChild(dateTitle);
        details.appendChild(dateInput);
        details.appendChild(priorityTitle);
        details.appendChild(prioritySelect);

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
            todo.notes = textArea.value;
        });

        notesContainer.appendChild(notesHeading);
        notesContainer.appendChild(textArea);

        return notesContainer;
    };

    const createChecklistContainer = (todo) => {
        /* Generate DOM elements */
        const listContainer = document.createElement("div");
        listContainer.classList.add("checklist-container");

        /* ===== Checklist header ===== */
        const listHeader = document.createElement("div");
        listHeader.classList.add("list-header");
    
        const listTitle = document.createElement("h3");
        listTitle.innerText = "Checklist";

        const addButton = Utility.CreateElementFromHTML(`<i class="fas fa-plus" aria-hidden="true"></i>`);

        listHeader.appendChild(listTitle);
        listHeader.appendChild(addButton);
        /* =========================== */

        const list = document.createElement("ul");

        /* ===== Checklist Items ====== */
        const checkIcon = Utility.CreateElementFromHTML(`<i class="fas fa-check-circle item-icon"></i>`);
        const crossIcon = Utility.CreateElementFromHTML(`<i class="fas fa-times-circle item-icon"></i>`);
        
        //If checklist exists and isn't empty
        if(todo.checklist?.size) {
            //Go through todo checklist and generate elements for each item
            todo.checklist.forEach(function(value, item){
                addChecklistItem(todo, list, value, item);
            });
        }
        /* ============================ */

        listContainer.appendChild(listHeader);
        listContainer.appendChild(list);

        /* Event Listeners */
        addButton.addEventListener('click', () => {
            PanelDOM.createPanel("Enter Checklist Item Title:", (value) => {
                todo.checklist.set(value, false);
                TodoEditorDOM.addChecklistItem(todo, list, false, value);
            });
        });

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
                //Element styling
                classList.remove("checked");
                classList.add("unchecked");

                //Icon styling
                icon.classList.remove("fa-check-circle");
                icon.classList.add("fa-times-circle");

                //Save value
                todo.checklist.set(item, false);
            } else if (classList.contains("unchecked")) {
                //Element styling
                classList.remove("unchecked");
                classList.add("checked");

                //Icon styling
                icon.classList.add("fa-check-circle");
                icon.classList.remove("fa-times-circle");

                //Save value
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
                todo.checklist.delete(item);
                listItem.remove();
            });
        }));

        listItem.appendChild(text);
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);
    }

    //Apply styling to priority label dependent on todo priority value
    function updatePriorityLabel(priorityLabel, priority) {
        priorityLabel.classList.remove(...priorityLabel.classList);
        priorityLabel.classList.add(`priority-${priority}`);
        priorityLabel.innerText = priority;
    }

    return {generateEditor, clearEditor, addChecklistItem};
})();

export {TodoEditorDOM};