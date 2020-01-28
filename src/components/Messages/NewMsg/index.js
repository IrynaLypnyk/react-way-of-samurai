import styles from "../index.module.css";
import React from "react";

const NewMsg = ({addMsg}) => {
    debugger;
    let NewMsgTextRef = React.createRef();

    let handleClick = () => {
        let text = NewMsgTextRef.current.value;
        addMsg(text);
    };

    return(
        <div className={styles.newMsg}>
            <textarea ref={NewMsgTextRef} name="msg-text" id="msg-text" cols="30" rows="5"></textarea>
            <div>
                <button type='button' onClick={handleClick} className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewMsg;
