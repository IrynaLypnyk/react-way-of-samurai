import React from 'react';
import styles from './index.module.css';
import PostItem from "./PostItem";


const MyPosts = (props) => {

    let PostItems = props.posts.map((el, index)=>{
        return(
            <PostItem img={el.img} alt={el.alt} msg={el.msg} key={index} likeCounts={el.likeCounts}/>
        )
    });
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

    return (
        <div className={styles.myPosts}>
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea ref={NewPostTextRef} value={props.newPostText} name="msg-text" id="msg-text" cols="30" rows="5" onChange={onPostChange}/>
                    <div>
                        <button type='button' onClick={addPost} className='btn'>Добавить</button>
                    </div>
                </div>
                <div className={styles.posts}>
                    {PostItems}
                  </div>
            </div>
        </div>
    )
}
export default MyPosts;