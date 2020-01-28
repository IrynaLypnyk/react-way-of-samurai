import React from 'react';
import styles from './index.module.css';

const PostItem = ({img, alt, msg, likeCounts}) => {

    return (
        <div className={styles.postItem}>
            <img className={styles.postItemImg} src={img} alt={alt}/>
            <span>{msg}</span>
            <div>likes {likeCounts}</div>
        </div>
    )
}
export default PostItem;