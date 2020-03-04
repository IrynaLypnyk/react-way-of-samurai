import React from 'react';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import './App.css';
import Messages from "./components/Messages";
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import {Route} from "react-router-dom";

function App({state, dispatch, store}) {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBar state={state.navBar}/>
                <main>
                    <div className='app-wrapper-content'>
                        <Route exact path='/profile' render={()=><Profile store={store}/>}/>
                        <Route path='/messages' render={()=><Messages store={store}/>}/>
                        <Route exact path='/news' render={()=><News/>}/>
                        <Route exact path='/music' render={()=><Music/>}/>
                        <Route exact path='/settings' render={()=><Settings/>}/>
                    </div>
                </main>
            </div>
    );
}

export default App;
