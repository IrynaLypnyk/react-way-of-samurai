import React from 'react';
import {connect} from "react-redux";
import NavBar from "../NavBar";


let mapStateToProps = (state) =>{
    return {
        navLinks: state.navBar.navLinks,
    }
};
let NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;