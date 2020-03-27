import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navBarReducer from "./navbar-reducer";
import usersReducer from "./user-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;