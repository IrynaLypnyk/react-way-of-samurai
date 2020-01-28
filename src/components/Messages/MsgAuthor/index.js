import React from 'react';
import styles from './index.module.css';
import {NavLink} from "react-router-dom";


const MsgAuthor = ({id, name}) => {
    return (
        <div className={`${styles.item} ${styles.active}`}>
            <NavLink to={`/messages/${id}`}>{name}</NavLink>
        </div>
    )
};

export default MsgAuthor;