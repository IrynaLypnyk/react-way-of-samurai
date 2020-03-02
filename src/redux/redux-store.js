import {combineReducers, createStore} from "redux";
import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import navbarReducer from "./navbar-reducer";

let reducers = combineReducers({
    messagesPage: messageReducer,
    profilePage: profileReducer,
    navBar: navbarReducer,
});

let store = createStore(reducers);

export default store;