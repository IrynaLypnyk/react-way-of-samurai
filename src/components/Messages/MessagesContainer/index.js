import React from "react";
import {connect} from "react-redux";
import Messages from "../index";


let mapStateToProps = (state) =>{
    return {
        messages: state.messagesPage.messages
    }
};

let MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
