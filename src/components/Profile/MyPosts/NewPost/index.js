import styles from "../index.module.css";
import React from "react";

const NewPost = ({newPostText, addNewPost, updateNewPostText}) => {

    let NewPostTextRef = React.createRef();

    let addPost = () => {
        addNewPost();
    };
    let onPostChange = () => {
        let newText = NewPostTextRef.current.value;
        updateNewPostText(newText);
    };

    return(
        <div className={styles.newPost}>
            <textarea ref={NewPostTextRef} value={newPostText} name="msg-text" id="msg-text" cols="30" rows="5" onChange={onPostChange}/>
            <div>
                <button type='button' onClick={addPost} className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewPost;
