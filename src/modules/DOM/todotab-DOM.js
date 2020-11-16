import {NotesExplorer} from "../notes-explorer";

const TodoTabDOM = (() => {
    /*=============================================
    Create tab, delete tab, get tab
    ===============================================*/

    const generateTab = (todo) => {
        //Create tab container
        const tab = document.createElement("div");
        tab.classList.add("tab");
        tab.classList.add("unselected");

        //Create tab title span
        const title = document.createElement("span");
        title.innerText = todo.title;

        tab.addEventListener('click', (() => {
            NotesExplorer.selectTodo(todo);
        }));

        //Create tab close button
        const closeButton = document.createElement("i");
        closeButton.classList.add("fas");
        closeButton.classList.add("fa-times");

        closeButton.addEventListener('click', ((e) => {
            e.stopPropagation();
            NotesExplorer.closeTodo(todo);
        }));

        //Fill tab container
        tab.appendChild(title);
        tab.appendChild(closeButton);

        return tab;
    };

    return {generateTab};
})();

export {TodoTabDOM};