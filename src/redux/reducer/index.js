import { combineReducers } from "redux";
import featured from "./featured";

const rootReducer = combineReducers({
    featuredPost: featured
});

export default rootReducer;