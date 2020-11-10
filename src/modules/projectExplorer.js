const explorerDiv = document.createElement("div");
explorerDiv.id = "project-explorer";

function loadProjExplorer(contentDiv) {
    contentDiv.appendChild(explorerDiv);
    return explorerDiv;
}

export {loadProjExplorer}