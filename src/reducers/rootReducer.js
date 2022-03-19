import { combineReducers } from "redux";
import currentUser from "./currentUser";
import loadingState from "./loadingState";

export default combineReducers({
    currentUser,
    loadingState
})