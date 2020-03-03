import React from 'react';
import styles from './index.module.css';
import PostItem from "./PostItem";
import NewPostContainer from "./NewPostContainer";

const MyPosts = ({state, dispatch}) => {

    let PostItems = state.posts.map((el, index)=>{
        return(
            <PostItem img={el.img} alt={el.alt} msg={el.msg} key={index} likeCounts={el.likeCounts}/>
        )
    });

    return (
        <div className={styles.myPosts}>
            <div>
                <h3>My Posts</h3>
                <NewPostContainer newPostText={state.newPostText}  dispatch={dispatch}/>
                <div className={styles.posts}>
                    {PostItems}
                  </div>
            </div>
        </div>
    )
}
export default MyPosts;