import Utility from "../utils";

const TodoEditorDOM = (() => {
    /*=============================================
    Create tab, delete tab, get tab
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
            <div>5th December 2020</div>
            <h3>Priority</h3>
            <div>Red</div>
            </div>`

        return details;
    };

    const createNotesContainer = (todo) => {
        const notesContainer = document.createElement("div");
        notesContainer.classList.add("notes-container");

        const notesHeading = document.createElement("h3");
        notesHeading.innerText = "Notes";

        const textArea = document.createElement("textarea");
        textArea.classList.add("notes");
        textArea.innerText = todo.notes;

        notesContainer.appendChild(notesHeading);
        notesContainer.appendChild(textArea);

        return notesContainer;
    };

    const createChecklistContainer = (todo) => {
        const listContainer = document.createElement("div");

        listContainer.classList.add("checklist-container");

        const listHeading = document.createElement("h3");
        listHeading.innerText = "Checklist";

        const list = document.createElement("ul");

        const checkIcon = Utility.CreateElementFromHTML(`<i class="fas fa-check-circle item-icon"></i>`);
        const crossIcon = Utility.CreateElementFromHTML(`<i class="fas fa-times-circle item-icon"></i>`);
        
        if(todo.checklist?.size) {
            todo.checklist.forEach((value, item) => {
                const listItem = document.createElement("li");
                console.log(item + " " + value);
                if(value) {
                    listItem.classList.add("checked");
                    const checkIcon = Utility.CreateElementFromHTML(`<i class="fas fa-check-circle item-icon"></i>`);
                    listItem.appendChild(checkIcon);
                } else {
                    listItem.classList.add("unchecked");
                    const crossIcon = Utility.CreateElementFromHTML(`<i class="fas fa-times-circle item-icon"></i>`);
                    listItem.appendChild(crossIcon);
                }


                listItem.addEventListener("click", (({currentTarget}) => {
                    let classList = currentTarget.classList;
                    const icon = currentTarget.querySelector(".item-icon");
                    if(classList.contains("checked")) {
                        classList.remove("checked");
                        classList.add("unchecked");
                        icon.classList.remove("fa-check-circle");
                        icon.classList.add("fa-times-circle");
                    } else if (classList.contains("unchecked")) {
                        classList.remove("unchecked");
                        classList.add("checked");
                        icon.classList.add("fa-check-circle");
                        icon.classList.remove("fa-times-circle");
                    }
                }));

                const text = document.createElement("span");
                text.innerText = item;
                listItem.appendChild(text);
                list.appendChild(listItem);
            });
        }

        listContainer.appendChild(listHeading);
        listContainer.appendChild(list);

        return listContainer;
    };

    return {generateEditor, clearEditor};
})();

export {TodoEditorDOM};