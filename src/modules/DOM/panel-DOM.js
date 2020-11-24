import {ProjectDOM} from "./project-DOM";
import Utility from "../utils";

export const PanelDOM = (() => {
    /* Get HTML elements */
    const panel = document.getElementById("display-panel");
    const panelContent = document.getElementById("panel-content");

    const topbar = panel.getElementsByClassName("top-bar")[0];
    const btnClose = topbar.getElementsByClassName("fa-times")[0];

    /* Event Listeners */
    btnClose.addEventListener('click', () => {closePanel()});

    function confirmationPanel(message, callback) {
        //Don't create new panel if one is already open
        if(isPanelOpen()) {
            return;
        }

        /* Generated DOM Elements */
        panel.classList.add("info");
        panel.classList.remove("hidden");
        
        const msg = document.createElement("div");
        msg.innerText = message;

        const btnsDiv = document.createElement("div");
        btnsDiv.classList.add("buttons");

        const btnDel = document.createElement("button");
        btnDel.classList.add("btn", "btn-error");
        btnDel.innerText = "Delete";

        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn");
        btnCancel.innerText = "Cancel";

        btnsDiv.appendChild(btnDel);
        btnsDiv.appendChild(btnCancel);

        panelContent.appendChild(msg);
        panelContent.appendChild(btnsDiv);

        /* Button Event Listeners */
        btnDel.addEventListener('click', () => {
            callback();
            closePanel();
        });

        btnCancel.addEventListener('click', ({target}) => {
            closePanel();
        });

        return panelContent;
    }

    function createPanel(message, callback) {
        //Don't create new panel if one is already open
        if(isPanelOpen()) {
            return;
        }

        /* Generated DOM Elements */
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

        const btnCancel = document.createElement("button");
        btnCancel.classList.add("btn");
        btnCancel.innerText = "Cancel";

        btnsDiv.appendChild(btnCreate);
        btnsDiv.appendChild(btnCancel);

        panelContent.appendChild(label);
        panelContent.appendChild(input);
        panelContent.appendChild(btnsDiv);

        /* Button Event Listeners */
        btnCreate.addEventListener('click', () => {
            callback(input.value);
            closePanel();
        });

        btnCancel.addEventListener('click', ({target}) => {
            closePanel();
        });

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