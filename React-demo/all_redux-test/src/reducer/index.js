//合并reducer
import { combineReducers } from "redux";
import filter from "./filter";
import computed from "./computed";

export default combineReducers({
    computed,
    filter,
});
