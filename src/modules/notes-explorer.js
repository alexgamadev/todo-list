/* eslint-disable brace-style */
/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
/* eslint-disable import/no-cycle */

import TodoTabDOM from './DOM/todotab-DOM';
import TodoEditorDOM from './DOM/todoeditor-DOM';

const NotesExplorer = (() => {
  const _openTodos = [];
  const _tabs = [];
  let _selectedTodo;
  const explorerDiv = document.getElementById('notes-explorer');
  const tabsContainer = explorerDiv.children[0];

  function addTab(tab) {
    tabsContainer.appendChild(tab);
    _tabs.push(tab);
  }

  function openTodo(todo) {
    // If todo tab already exists then select it
    if (isTodoOpen(todo)) {
      selectTodo(todo);
      return;
    }

    // If tab not already exists then generate a new one and select it
    const tab = TodoTabDOM.generateTab(todo);
    addTab(tab);
    _openTodos.push(todo);

    selectTodo(todo);
  }

  function closeTodo(todo) {
    // If todo doesn't exist return
    if (!isTodoOpen(todo)) {
      return;
    }

    // Get index of todo and remove from array
    const index = _openTodos.indexOf(todo);
    _openTodos.splice(index, 1);

    // Remove tab element of todo from page and array
    _tabs[index].remove();
    _tabs.splice(index, 1);

    // If todo is selected and there is still a todo tab to select
    if (todo === _selectedTodo && (_openTodos.length !== 0)) {
      // Select another tab
      _selectedTodo = undefined;
      selectTodo(_openTodos[_openTodos.length - 1]);
    }
    // If todo is selected and there is no other todo tab to select
    else if (todo === _selectedTodo) {
      // Clear todo editor
      _selectedTodo = undefined;
      TodoEditorDOM.clearEditor();
    }
  }

  function selectTodo(todo) {
    // If a todo is already selected then unselect it
    if (_selectedTodo !== undefined) {
      const oldIndex = _openTodos.indexOf(_selectedTodo);
      toggleSelected(_tabs[oldIndex]);
    }

    // Change styling of tab to show it's selected
    const newIndex = _openTodos.indexOf(todo);
    toggleSelected(_tabs[newIndex]);
    _selectedTodo = todo;
    // Clear todo editor data and generate data for the newly selected todo
    TodoEditorDOM.clearEditor();
    TodoEditorDOM.generateEditor(todo);
  }

  function toggleSelected(tab) {
    const { classList } = tab;

    if (classList.contains('unselected')) {
      classList.remove('unselected');
      classList.add('selected');
    } else if (classList.contains('selected')) {
      classList.add('unselected');
      classList.remove('selected');
    }
  }

  function isTodoOpen(todo) {
    return _openTodos.includes(todo);
  }

  return {
    openTodo, closeTodo, selectTodo, isTodoOpen,
  };
})();

export default NotesExplorer;
