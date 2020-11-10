const headerElement = document.createElement("header");
headerElement.id = "header";

const logo = document.createElement("h1");
logo.classList.add("logo");
logo.innerText = "Todo List";

const newProj = document.createElement("div");
newProj.classList.add("new-project");
newProj.innerText = "+";

headerElement.appendChild(logo);
headerElement.appendChild(newProj);

function loadHeader(appElement) {
    appElement.insertBefore(headerElement, appElement.childNodes[0]);
}


export {loadHeader}