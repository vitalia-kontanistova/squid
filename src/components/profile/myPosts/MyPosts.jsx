import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  let textareaChange = (event) => props.changePostBody(event.target.value);
  let postBtnClick = () => props.addPost();

  return (
    <div className={css.posts}>
      <div className={css.posts_title}>my posts</div>
      <div className={css.new_post}>
        <div className={css.textarea}>
          <textarea value={props.newPostText} onChange={textareaChange} />
        </div>
        <button className={`${css.btn_post} ${css.btn}`} onClick={postBtnClick}>
          Post
        </button>
        <button className={`${css.btn_remove} ${css.btn}`}>Remove</button>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
