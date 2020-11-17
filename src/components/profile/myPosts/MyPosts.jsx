import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  let postData = [
    { id: 1, message: "Yo Yo Yo", likes: 5 },
    { id: 2, message: "Mmmm...", likes: 7 },
    { id: 3, message: "Zzzz", likes: 3 },
  ];

  let postElements = postData.map((post) => (
    <Post message={post.message} likes={post.likes} />
  ));

  return (
    <div className={css.posts}>
      <div className={css.posts_title}>my posts</div>
      <div className={css.new_post}>
        <div className={css.textarea}>
          <textarea></textarea>
        </div>
        <button className={`${css.btn_post} ${css.btn}`}>Post</button>
        <button className={`${css.btn_remove} ${css.btn}`}>Remove</button>
      </div>
      {postElements}
    </div>
  );
};
export default MyPosts;
