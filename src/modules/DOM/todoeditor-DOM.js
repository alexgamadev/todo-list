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
        console.log(todo);
        //Find content container
        const content = document.getElementById("notes-content");
        
        /*=============================================
            Notes Container
        ===============================================*/
        const notesContainer = document.createElement("div");
        notesContainer.classList.add("notes-container");

        const notesHeading = document.createElement("h3");
        notesHeading.innerText = "Notes";

        const textArea = document.createElement("textarea");
        textArea.classList.add("notes");
        textArea.innerText = todo.notes;

        notesContainer.appendChild(notesHeading);
        notesContainer.appendChild(textArea);

        content.appendChild(notesContainer);

        /*=============================================
            Checklist Container
        ===============================================*/
        const listContainer = document.createElement("div");
        listContainer.classList.add("checklist-container");

        const listHeading = document.createElement("h3");
        listHeading.innerText = "Checklist";

        const list = document.createElement("ul");
        
        if(todo.checklist?.length) {
            todo.checklist.forEach(item => {
                const listItem = document.createElement("li");
                listItem.innerText = item;
                list.appendChild(listItem);
            });
        }
        

        listContainer.appendChild(listHeading);
        listContainer.appendChild(list);

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

    return {generateEditor, clearEditor};
})();

export {TodoEditorDOM};