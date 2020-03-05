import React from "react";
import {AddPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
};
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (newText) => dispatch(UpdateNewPostTextActionCreator(newText)),
        addPost: () =>  dispatch(AddPostActionCreator()),
    }
};

let NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default NewPostContainer;
