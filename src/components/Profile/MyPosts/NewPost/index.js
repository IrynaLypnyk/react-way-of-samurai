import styles from "../index.module.css";
import React from "react";

const NewPost = () => {

    let NewPostTextRef = React.createRef();

    let addPost = () => {
        let text = NewPostTextRef.current.value;
        alert(text)
    };

    return(
        <div className={styles.newPost}>
            <textarea ref={NewPostTextRef} name="msg-text" id="msg-text" cols="30" rows="5"></textarea>
            <div>
                <button type='button' onClick={addPost} className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewPost;
