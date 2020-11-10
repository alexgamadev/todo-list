
const NotesExplorer = (() => {
    const explorerDiv = document.createElement("div");
    const tabsContainer = document.createElement("div");
    const todoEditor = document.createElement("div");

    function initExplorer() {
        explorerDiv.id = "notes-explorer";
        tabsContainer.classList.add("tabs-container");
        todoEditor.classList.add("notes-editor");
    
        explorerDiv.appendChild(tabsContainer);
        explorerDiv.appendChild(todoEditor);
    }

    function loadNotesExplorer(contentDiv) {
        initExplorer();
        contentDiv.appendChild(explorerDiv);
    }
    
    function addTab(tab) {
        tabsContainer.appendChild(tab);
    }

    return {loadNotesExplorer, addTab}

})();

export {NotesExplorer}