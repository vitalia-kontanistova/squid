import React from "react";
import MyPosts from "./myPosts/MyPosts";
import css from "./Profile.module.css";

const Profile = () => {
	return (
		<div className={css.profile}>
			<div className={css.img}>
				<img src="https://image.freepik.com/free-photo/top-view-sand-meeting-seawater_158595-6255.jpg" alt="sea img"></img>
			</div>
			<div className={css.user_info}>ava + info</div>
			<MyPosts />
		</div>
	);
}
export default Profile;
