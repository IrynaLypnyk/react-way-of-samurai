import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../../redux/profile-reducer";
import NewPost from "../NewPost";

const NewPostContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(AddPostActionCreator());
    };
    let onPostChange = (newText) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(newText));
    };

    return(
        <NewPost newPostText={props.newPostText} updateNewPostText={onPostChange} addPost={addPost}/>
    )
};
export default NewPostContainer;
