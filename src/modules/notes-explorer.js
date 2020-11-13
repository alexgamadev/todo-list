import { TodoDOM } from "./DOM/todo-DOM";

const NotesExplorer = (() => {
    let _openTodos = [];
    let _tabs = [];
    const explorerDiv = document.getElementById("notes-explorer");
    const tabsContainer = explorerDiv.children[0];
    const notesEditor = explorerDiv.children[1];
    
    function addTab(tab) {
        tabsContainer.appendChild(tab);
        _tabs.push(tab);
    }

    function openTodo(todo) {
        if(isTodoOpen(todo)) {
            return;
        }

        const tab = TodoDOM.generateTodoTab(todo);
        addTab(tab);
        _openTodos.push(todo);
    }

    function closeTodo(todo){
        if(!isTodoOpen) {
            return;
        }

        let index = _openTodos.indexOf(todo);
        _openTodos.splice(index, 1);
        _tabs[index].remove();
        _tabs.splice(index, 1);
    }

    function isTodoOpen(todo){
        return _openTodos.includes(todo) ? true : false;
    }

    return {openTodo, closeTodo, isTodoOpen}
})();

export {NotesExplorer}