/* eslint-disable import/no-cycle */
import NotesExplorer from '../notes-explorer';

const TodoTabDOM = (() => {
  const generateTab = (todo) => {
    /* Generated DOM Elements */
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.classList.add('unselected');

    const title = document.createElement('span');
    title.innerText = todo.title;

    const closeButton = document.createElement('i');
    closeButton.classList.add('fas');
    closeButton.classList.add('fa-times');

    tab.appendChild(title);
    tab.appendChild(closeButton);

    /* Event Listeners */
    tab.addEventListener('click', (() => {
      NotesExplorer.selectTodo(todo);
    }));

    closeButton.addEventListener('click', ((e) => {
      e.stopPropagation();
      NotesExplorer.closeTodo(todo);
    }));

    return tab;
  };

  return { generateTab };
})();

export default TodoTabDOM;
