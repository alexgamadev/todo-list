import {loadHeader} from './modules/header';
import {init, loadHome} from "./modules/home";

const appElement = document.getElementById("app");

loadHeader(appElement);
loadHome(appElement);


/* ==================================================================
    Move to own module
================================================================== */
const project = document.getElementsByClassName("project-title")[0];

//Link project with project-tab
//Link listContainer with project  

project.addEventListener('click', (({currentTarget}) => {
    let classList = currentTarget.classList;
    //Select
    if(classList.contains("unselected")) {
        classList.remove("unselected");
        classList.add("selected");
        currentTarget.children[0].classList.remove("fa-angle-right");
        currentTarget.children[0].classList.add("fa-angle-down");
        const listContainer = document.getElementsByClassName("list-container")[0];
        listContainer.classList.remove("closed");
        listContainer.classList.add("opened");
        console.log(listContainer);
    } 
    //Unselect
    else if(classList.contains("selected")) {
        classList.add("unselected");
        classList.remove("selected");
        currentTarget.children[0].classList.add("fa-angle-right");
        currentTarget.children[0].classList.remove("fa-angle-down");
        const listContainer = document.getElementsByClassName("list-container")[0];
        listContainer.classList.remove("opened");
        listContainer.classList.add("closed");        
    }
}));
/* ================================================================== */
