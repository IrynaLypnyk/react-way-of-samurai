import styles from "../index.module.css";
import React from "react";
import {AddMsgActionCreator, UpdateNewMsgTextActionCreator} from "../../../redux/state";


const NewMsg = ({newMsgText, dispatch}) => {

    let NewMsgTextRef = React.createRef();

    let handleClick = () => {
        dispatch(AddMsgActionCreator());
    };
    let onMsgChange = () => {
        let newText = NewMsgTextRef.current.value;
        dispatch(UpdateNewMsgTextActionCreator(newText));

    }

    return(
        <div className={styles.newMsg}>
            <textarea ref={NewMsgTextRef} name="msg-text" id="msg-text" cols="30" rows="5" value={newMsgText} onChange={onMsgChange}/>
            <div>
                <button type='button' onClick={handleClick} className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewMsg;
