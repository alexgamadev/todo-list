const headerElement = document.createElement("header");
headerElement.id = "head";

const logo = document.createElement("h1");
logo.classList.add("logo");
logo.innerText = "Todo List";

const newProj = document.createElement("div");
newProj.classList.add("new-project");
newProj.innerText = "+";

headerElement.appendChild(logo);
headerElement.appendChild(newProj);

function loadHeader(appElement) {
    appElement.appendChild(headerElement);
}


export {loadHeader}