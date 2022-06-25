import { combineReducers } from "redux";
import currentUser from "./currentUser";
import loadingState from "./loadingState";
import securityGateway from "./securityGateway";
import menuState from "./menuState";
import currentApp from "./currentApp";

export default combineReducers({
    currentUser,
    loadingState,
    securityGateway,
    menuState,
    currentApp
})