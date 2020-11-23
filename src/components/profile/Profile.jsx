import React from "react";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={css.profile}>
      <ProfileInfo />
      <MyPostsContainer
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </div>
  );
};
export default Profile;
