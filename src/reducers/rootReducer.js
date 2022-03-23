import { combineReducers } from "redux";
import currentUser from "./currentUser";
import loadingState from "./loadingState";
import securityGateway from "./securityGateway";

export default combineReducers({
    currentUser,
    loadingState,
    securityGateway
})