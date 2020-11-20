import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.profilePage.postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  let textareaRef = React.createRef();

  let postBtnClick = () => {
    props.addPost();
  };

  let textareaChange = () => {
    let userPost = textareaRef.current.value;
    props.changePostTextarea(userPost);
  };

  return (
    <div className={css.posts}>
      <div className={css.posts_title}>my posts</div>
      <div className={css.new_post}>
        <div className={css.textarea}>
          <textarea
            ref={textareaRef}
            value={props.profilePage.newPostText}
            onChange={textareaChange}
          />
          {/* <textarea ref={textareaRef}></textarea> */}
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
