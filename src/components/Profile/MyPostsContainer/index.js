import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "../MyPosts";

const NewPostContainer = (props) => {
    debugger;
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(AddPostActionCreator());
    };
    let onPostChange = (newText) => {
        props.store.dispatch(UpdateNewPostTextActionCreator(newText));
    };

    return(
        <MyPosts newPostText={state.profilePage.newPostText} posts={state.profilePage.posts} updateNewPostText={onPostChange} addPost={addPost}/>
    )
};
export default NewPostContainer;
