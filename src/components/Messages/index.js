import React from 'react';
import styles from './index.module.css';
import MsgAuthor from "./MsgAuthor";
import MsgText from "./MsgText";

const Messages = ({state}) => {
    debugger;
    return (
        <div className={styles.dialogs}>
            <div className={styles.authors}>
                {state.map((el)=>{
                    return (
                       <MsgAuthor id={el.id} name={el.name} />
                    )
                })}
            </div>
            <div className={styles.messages}>
                {state.map((el)=>{
                    return (
                        <MsgText text={el.text}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Messages;