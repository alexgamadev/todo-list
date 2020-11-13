import { TodoDOM } from "./DOM/todo-DOM";

const NotesExplorer = (() => {
    let _openTodos = [];
    let _tabs = [];
    let _selectedTodo;
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

        selectTodo(todo);
    }

    function closeTodo(todo){
        if(!isTodoOpen(todo)) {
            return;
        }

        let index = _openTodos.indexOf(todo);
        _openTodos.splice(index, 1);
        _tabs[index].remove();
        _tabs.splice(index, 1);

        if(todo === _selectedTodo && _openTodos !== undefined){
            _selectedTodo = undefined;
            selectTodo(_openTodos[_openTodos.length-1]);
        }
        
    }

    function selectTodo(todo){
        if(_selectedTodo !== undefined) {
            let oldIndex = _openTodos.indexOf(_selectedTodo);
            toggleSelected(_tabs[oldIndex]);
        }
        
        let newIndex = _openTodos.indexOf(todo);
        toggleSelected(_tabs[newIndex]);
        _selectedTodo = todo;
    }

    function toggleSelected(tab){
        let classList = tab.classList;

        if(classList.contains("unselected")) {
            classList.remove("unselected");
            classList.add("selected");
        }
        else if(classList.contains("selected")) {
            classList.add("unselected");
            classList.remove("selected");
        }
    }

    function isTodoOpen(todo){
        return _openTodos.includes(todo) ? true : false;
    }

    return {openTodo, closeTodo, selectTodo}
})();

export {NotesExplorer}