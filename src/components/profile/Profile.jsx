import React from "react";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

class Profile extends React.Component {
  render() {
    return (
      <div className={css.profile}>
        <ProfileInfo />
        <MyPostsContainer />
      </div>
    );
  }
}

export default Profile;
