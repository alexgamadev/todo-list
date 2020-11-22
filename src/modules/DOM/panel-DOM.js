import {ProjectDOM} from "./project-DOM";
import Utility from "../utils";

export const PanelDOM = (() => {
    const panel = document.getElementById("display-panel");
    const topbar = panel.getElementsByClassName("top-bar")[0];
    const btnClose = topbar.getElementsByClassName("fa-times")[0];
    btnClose.addEventListener('click', () => {closePanel()});
    const panelContent = document.getElementById("panel-content");


    function deleteTodoPanel(target, projectID, todo) {
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

    function closePanel() {
        panel.classList.add("hidden");
        clearContent();
    }

    function clearContent() {
        Utility.RemoveChildNodes(panelContent);
    }

    return {deleteTodoPanel}
})();