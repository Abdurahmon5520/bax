import {combineReducers} from "redux";
import {loginReducer} from "./loginReducer";
import {menusReducer} from "./menusReducer";


export const rootReducer = combineReducers({
    login: loginReducer,
    menus: menusReducer
});