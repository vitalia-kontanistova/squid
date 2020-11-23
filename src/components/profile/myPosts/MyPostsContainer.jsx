import React from "react";
import {
  addPostCreator,
  changePostBodyCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let addPost = () => props.dispatch(addPostCreator());
  let changePostBody = (userPost) =>
    props.dispatch(changePostBodyCreator(userPost));

  return (
    <MyPosts
      postData={props.profilePage.postData}
      newPostText={props.profilePage.newPostText}
      addPost={addPost}
      changePostBody={changePostBody}
    />
  );
};

export default MyPostsContainer;
