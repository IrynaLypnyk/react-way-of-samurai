import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {addMsg} from './redux/state';
import {updateNewMsgText} from './redux/state';
import App from './App';


import './index.css';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
    <BrowserRouter>
        <App state={state} addMsg={addMsg} updateNewMsgText={updateNewMsgText}/>
    </BrowserRouter>
    , document.getElementById('root'));

}


