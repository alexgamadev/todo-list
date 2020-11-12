const ProjectExplorer = (() => {
    const explorerDiv = document.getElementById("project-explorer");
    
    function addTab(tab) {
        explorerDiv.appendChild(tab);
    }

    return {addTab}
})();

export {ProjectExplorer}