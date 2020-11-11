import {loadHeader} from './modules/header';
import {loadHome} from "./modules/home";

const appElement = document.getElementById("app");

loadHeader(appElement);
loadHome(appElement);

