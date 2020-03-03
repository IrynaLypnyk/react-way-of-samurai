import styles from "../index.module.css";
import React from "react";

const NewPost = (props) => {
debugger;
    let NewPostTextRef = React.createRef();

    let addPost = () => {
        // dispatch(AddPostActionCreator());
        props.addPost();
    };
    let onPostChange = () => {
        let newText = NewPostTextRef.current.value;
        // dispatch(UpdateNewPostTextActionCreator(newText));
        props.updateNewPostText(newText);
    };

    return(
        <div className={styles.newPost}>
            <textarea ref={NewPostTextRef} value={props.newPostText} name="msg-text" id="msg-text" cols="30" rows="5" onChange={onPostChange}/>
            <div>
                <button type='button' onClick={addPost} className='btn'>Добавить</button>
            </div>
        </div>
    )
};
export default NewPost;
