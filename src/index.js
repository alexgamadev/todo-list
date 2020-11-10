import {loadHeader} from './modules/header';
import {init, loadHome} from "./modules/home";

const appElement = document.getElementById("app");

loadHeader(appElement);
loadHome(appElement);


/* ==================================================================
    Move to own module
================================================================== */
const project = document.getElementsByClassName("project-title")[0];

project.addEventListener('click', (({currentTarget}) => {
    let classList = currentTarget.classList;
    if(classList.contains("unselected")) {
        classList.remove("unselected");
        classList.add("selected");
        currentTarget.children[0].classList.remove("fa-angle-right");
        currentTarget.children[0].classList.add("fa-angle-down");
    } else if(classList.contains("selected")){
        classList.add("unselected");
        classList.remove("selected");
        currentTarget.children[0].classList.add("fa-angle-right");
        currentTarget.children[0].classList.remove("fa-angle-down");
    }
}));
/* ================================================================== */
