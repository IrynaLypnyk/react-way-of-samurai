import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import './App.css';
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import {Route} from "react-router-dom";
import NavBarContainer from "./components/NavBarContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";


function App() {
    debugger;
    return (
            <div className="app-wrapper">
                <Header/>
                <NavBarContainer />
                <main>
                    <div className='app-wrapper-content'>
                        <Route exact path='/profile' render={()=><Profile />}/>
                        <Route path='/messages' render={()=><MessagesContainer/>}/>
                        <Route exact path='/news' render={()=><News/>}/>
                        <Route exact path='/music' render={()=><Music/>}/>
                        <Route exact path='/settings' render={()=><Settings/>}/>
                    </div>
                </main>
            </div>
    );
}

export default App;
