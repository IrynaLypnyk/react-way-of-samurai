import React from 'react';
import styles from './index.module.css';
import MsgAuthor from "./MsgAuthor";
import MsgText from "./MsgText";
import NewMsgContainer from "./NewMsgContainer";

const Messages = (props) => {
    let state = props.store.getState();

    let MsgAuthorItems = state.messagesPage.messages.map((item)=>{
        return (
            <MsgAuthor id={item.id} name={item.name} />
        )
    });
    let MsgTextItems = state.messagesPage.messages.map((item)=>{
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
            <NewMsgContainer store={props.store}/>
        </div>

    )
}
export default Messages;