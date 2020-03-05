import React from "react";
import {AddMsgActionCreator, UpdateNewMsgTextActionCreator} from "../../../redux/message-reducer";
import NewMsg from "../NewMsg";
import {connect} from "react-redux";
import StoreContext from "../../../StoreContext";


let mapStateToProps = (state) =>{
    return {
        newMsgText: state.messagesPage.newMsgText
    }
};
let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMsgText: (newText) => {
            dispatch(UpdateNewMsgTextActionCreator(newText));
        },
        addMsg: () => {
            dispatch(AddMsgActionCreator());
        }
    }
};

let NewMsgContainer = connect(mapStateToProps, mapDispatchToProps)(NewMsg);

export default NewMsgContainer;
