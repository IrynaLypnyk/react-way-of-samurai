import React from 'react';
import styles from './index.module.css';

const MsgText = ({text}) => {
    return(
        <div className={styles.item}>
            {text}
        </div>
    )
};

export default MsgText;