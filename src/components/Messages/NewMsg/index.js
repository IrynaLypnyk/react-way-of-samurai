import styles from "../index.module.css";
import React from "react";



const NewMsg = (props) => {

    // let NewMsgTextRef = React.createRef();

    let handleClick = () => {
        props.addMsg();
    };
    let onMsgChange = (e) => {
        let newText = e.target.value;
        props.updateNewMsgText(newText);

    }

    return(
        <div className={styles.newMsg}>
            <textarea  name="msg-text" id="msg-text" cols="30" rows="5" value={props.newMsgText} onChange={onMsgChange}/>
            <div>
                <button type='button' onClick={handleClick} className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewMsg;
