
const NotesExplorer = (() => {
    const explorerDiv = document.getElementById("notes-explorer");
    const tabsContainer = explorerDiv.children[0];
    
    function addTab(tab) {
        tabsContainer.appendChild(tab);
    }

    return {addTab}

})();

export {NotesExplorer}