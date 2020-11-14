import React from "react";

const Profile = () => {
	return (
		<div className="profile">
			<div className="profile__img">
				<img src="https://image.freepik.com/free-photo/top-view-sand-meeting-seawater_158595-6255.jpg" alt="sea img"></img>
			</div>
			<div className="profile__user-info">ava + info</div>
			<div className="profile__posts posts">
				<div className="posts__title">my posts</div>
				<div className="posts_new-post">new post</div>
				<div className="posts__post">post 1</div>
				<div className="posts__post">post 2</div>
			</div>
		</div>
	);
}
export default Profile;
