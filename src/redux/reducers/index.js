import { combineReducers } from "redux";
import userDataReducer from "./userDataReducer";
import usersListReducer from "./usersListReducer";
import userDialogReducer from "./userDialogReducer";


const rootReducer = combineReducers({
    userData: userDataReducer,
    usersList: usersListReducer,
    userDialog: userDialogReducer
})


export default rootReducer