import {ProjectDOM} from "./project-DOM";
import Utility from "../utils";

export const PanelDOM = (() => {
    const panel = document.getElementById("display-panel");
    const topbar = panel.getElementsByClassName("top-bar")[0];
    const btnClose = topbar.getElementsByClassName("fa-times")[0];
    btnClose.addEventListener('click', () => {closePanel()});
    const panelContent = document.getElementById("panel-content");


    function confirmationPanel(message, callback) {
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
            callback();
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

    function createPanel(message, callback) {
        if(isPanelOpen()) {
            return;
        }
        panel.classList.add("info");
        panel.classList.remove("hidden");
        
        const label = document.createElement("label");
        label.classList.add("align-left");
        label.innerText = message;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Title";

        const btnsDiv = document.createElement("div");
        btnsDiv.classList.add("buttons");

        const btnCreate = document.createElement("button");
        btnCreate.classList.add("btn", "btn-success");
        btnCreate.innerText = "Create";
        btnCreate.addEventListener('click', () => {
            callback(input.value);
            closePanel();
        });

        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn");
        btnCancel.innerText = "Cancel";
        btnCancel.addEventListener('click', ({target}) => {
            closePanel();
        });

        btnsDiv.appendChild(btnCreate);
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

    return {confirmationPanel, createPanel}
})();