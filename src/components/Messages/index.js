import React from 'react';
import styles from './index.module.css';
import MsgAuthor from "./MsgAuthor";
import MsgText from "./MsgText";
import NewMsg from "./NewMsg";

const Messages = ({state, addMsg, newMsgText, updateNewMsgText}) => {

    let MsgAuthorItems = state.messages.map((item)=>{
        return (
            <MsgAuthor id={item.id} name={item.name} />
        )
    });
    let MsgTextItems = state.messages.map((item)=>{
        return (
            <MsgText text={item.text}/>
        )
    })

    return (
        <div>
            <div className={styles.dialogs}>
                <div className={styles.authors}>
                    {MsgAuthorItems}
                </div>
                <div className={styles.messages}>
                    {MsgTextItems}
                </div>
            </div>
            <h3>New Message</h3>
            <NewMsg addMsg={addMsg} newMsgText={newMsgText} updateNewMsgText={updateNewMsgText}/>
        </div>

    )
}
export default Messages;