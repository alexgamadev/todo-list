import { TodoDOM } from "./DOM/todo-DOM";

const NotesExplorer = (() => {
    const explorerDiv = document.getElementById("notes-explorer");
    const tabsContainer = explorerDiv.children[0];
    
    function addTab(tab) {
        tabsContainer.appendChild(tab);
    }

    function openTodo(todo) {
        const tab = TodoDOM.generateTodoTab(todo);
        addTab(tab);
    }

    return {openTodo}
})();

export {NotesExplorer}