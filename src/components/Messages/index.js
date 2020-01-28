import React from 'react';
import styles from './index.module.css';
import MsgAuthor from "./MsgAuthor";
import MsgText from "./MsgText";

const Messages = ({state}) => {

    let MsgAuthorItems = state.map((item)=>{
        return (
            <MsgAuthor id={item.id} name={item.name} />
        )
    });
    let MsgTextItems = state.map((item)=>{
        return (
            <MsgText text={item.text}/>
        )
    })
    debugger;
    return (
        <div className={styles.dialogs}>
            <div className={styles.authors}>
                {MsgAuthorItems}
            </div>
            <div className={styles.messages}>
                {MsgTextItems}
            </div>
        </div>
    )
}
export default Messages;