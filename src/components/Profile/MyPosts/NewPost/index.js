import styles from "../index.module.css";
import React from "react";

const NewPost = () => {
    return(
        <div className={styles.newPost}>
            <textarea name="msg-text" id="msg-text" cols="30" rows="5"></textarea>
            <div>
                <button className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewPost;
