import React from "react";
import {AddMsgActionCreator, UpdateNewMsgTextActionCreator} from "../../../redux/message-reducer";
import NewMsg from "../NewMsg";
import {connect} from "react-redux";


// const NewMsgContainer = (props) => {
//     let state = props.store.getState();
//
//     let handleClick = () => {
//         props.store.dispatch(AddMsgActionCreator());
//     };
//     let onMsgChange = (newText) => {
//         props.store.dispatch(UpdateNewMsgTextActionCreator(newText));
//
//     }
//
//     return(
//         <NewMsg addMsg={handleClick} updateNewMsgText={onMsgChange} newMsgText={state.messagesPage.newMsgText} />
//     )
// };

let mapStateToProps = (state) =>{
    return {
        messagesPage: state.messagesPage
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
