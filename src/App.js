import React from 'react';
import './App.css';
import News from "./components/News";
import Music from "./components/Music";
import Settings from "./components/Settings";
import {Route} from "react-router-dom";
import NavBarContainer from "./components/NavBarContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



function App() {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer />
                <main>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={()=><ProfileContainer />}/>
                        <Route path='/messages' render={()=><MessagesContainer/>}/>
                        <Route exact path='/news' render={()=><News/>}/>
                        <Route exact path='/music' render={()=><Music/>}/>
                        <Route exact path='/settings' render={()=><Settings/>}/>
                        <Route exact path='/users' render={()=><UsersContainer/>}/>
                    </div>
                </main>
            </div>
    );
}

export default App;
