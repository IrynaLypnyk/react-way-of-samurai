import styles from "../index.module.css";
import React from "react";

const NewMsg = ({addMsg, newMsgText, updateNewMsgText}) => {

    let NewMsgTextRef = React.createRef();

    let handleClick = () => {
        let text = NewMsgTextRef.current.value;
        addMsg(text);
        NewMsgTextRef.current.value = '';
    };
    let onMsgChange = () => {
        let newText = NewMsgTextRef.current.value;
        updateNewMsgText(newText);
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
