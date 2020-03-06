import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navBarReducer from "./navbar-reducer";
import usersReducer from "./user-reducer";

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;