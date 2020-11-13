import {NotesExplorer} from "../notes-explorer";

const TodoDOM = (() => {
    /*=============================================
    Create tab, delete tab, get tab
    ===============================================*/

    const generateTodoTab = (todo) => {
        //Create tab container
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.classList.add("unselected");

        //Create tab title span
        const title = document.createElement("span");
        title.innerText = todo.title;

        //Create tab close button
        const closeButton = document.createElement("i");
        closeButton.classList.add("fas");
        closeButton.classList.add("fa-times");

        closeButton.addEventListener('click', (() => {
            NotesExplorer.closeTodo(todo);
        }));

        //Fill tab container
        tab.appendChild(title);
        tab.appendChild(closeButton);

        return tab;
    };

    return {generateTodoTab};
})();

export {TodoDOM};