import {ProjectDOM} from "./project-DOM";
import {TodoData} from "../todo-data";
import {ProjectManager} from "../project-manager";
import {ProjectExplorer} from "../project-explorer";
import {NotesExplorer} from "../notes-explorer";
import Utility from "../utils";

export const PanelDOM = (() => {
    const panel = document.getElementById("display-panel");
    const topbar = panel.getElementsByClassName("top-bar")[0];
    const btnClose = topbar.getElementsByClassName("fa-times")[0];
    btnClose.addEventListener('click', () => {closePanel()});
    const panelContent = document.getElementById("panel-content");


    function deleteTodoPanel(target, projectID, todo) {
        if(isPanelOpen()) {
            return;
        }
        panel.classList.add("info");
        panel.classList.remove("hidden");
        
        const msg = document.createElement("div");
        msg.innerText = "Are you sure you want to delete this todo?";

        const btnsDiv = document.createElement("div");
        btnsDiv.classList.add("buttons");

        const btnDel = document.createElement("button");
        btnDel.classList.add("btn", "btn-error");
        btnDel.innerText = "Delete";
        btnDel.addEventListener('click', () => {
            ProjectDOM.deleteTodoLink(target, projectID, todo);
            closePanel();
        });

        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn");
        btnCancel.innerText = "Cancel";
        btnCancel.addEventListener('click', ({target}) => {
            closePanel();
        });

        btnsDiv.appendChild(btnDel);
        btnsDiv.appendChild(btnCancel);

        panelContent.appendChild(msg);
        panelContent.appendChild(btnsDiv);

        return panelContent;
    }

    function createTodoPanel(projectId) {
        if(isPanelOpen()) {
            return;
        }
        panel.classList.add("info");
        panel.classList.remove("hidden");
        
        const label = document.createElement("label");
        label.classList.add("align-left");
        label.innerText = "Enter Todo Title:";

        const input = document.createElement("input");
        input.attributes["type"] = "text";
        input.attributes["placeholder"] = "Title"

        const btnsDiv = document.createElement("div");
        btnsDiv.classList.add("buttons");

        const btnDel = document.createElement("button");
        btnDel.classList.add("btn", "btn-success");
        btnDel.innerText = "Create";
        btnDel.addEventListener('click', () => {
            let newTodo = new TodoData(input.value, "");
            const project = ProjectManager.getProject(projectId);
            project.addTodo(newTodo); 
            ProjectExplorer.loadProjects(ProjectManager.getProjects());
            NotesExplorer.openTodo(newTodo);
            closePanel();
        });

        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn");
        btnCancel.innerText = "Cancel";
        btnCancel.addEventListener('click', ({target}) => {
            closePanel();
        });

        btnsDiv.appendChild(btnDel);
        btnsDiv.appendChild(btnCancel);

        panelContent.appendChild(label);
        panelContent.appendChild(input);
        panelContent.appendChild(btnsDiv);

        return panelContent;
    }

    function isPanelOpen() {
        return panel.classList.contains("hidden") ? false : true;
    }

    function closePanel() {
        panel.classList.add("hidden");
        clearContent();
    }

    function clearContent() {
        Utility.RemoveChildNodes(panelContent);
    }

    return {deleteTodoPanel, createTodoPanel}
})();