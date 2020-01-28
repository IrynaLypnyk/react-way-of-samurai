import React from 'react';
import styles from './index.module.css';
import PostItem from "./PostItem";
import NewPost from "./NewPost";

const MyPosts = ({state}) => {
    debugger;
    return (
        <div className={styles.myPosts}>
            <div>
                <h3>My Posts</h3>
                <NewPost />
                <div className={styles.posts}>
                    {state.map((el)=>{
                        return(
                            <PostItem img={el.img} alt={el.alt} msg={el.msg} likeCounts={el.likeCounts}/>
                        )
                    })}
                  </div>
            </div>
        </div>
    )
}
export default MyPosts;