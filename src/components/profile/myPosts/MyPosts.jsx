import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
			<Post message="Message 1" />
			<Post message="Message 2" />
			<Post message="Message 3" />
			<Post message="Message 4" />
		</div> 
	);
}
export default MyPosts;
