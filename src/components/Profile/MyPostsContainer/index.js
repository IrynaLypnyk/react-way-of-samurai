import React from "react";
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "../MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return{
//         updateNewPostText: (newText) => dispatch(UpdateNewPostTextActionCreator(newText)),
//         addPost: () =>  dispatch(AddPostActionCreator()),
//     }
// };

let NewPostContainer = connect(mapStateToProps, {addPost, updateNewPostText})(MyPosts);
export default NewPostContainer;
