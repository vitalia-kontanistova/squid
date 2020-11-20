import React from "react";
import MyPosts from "./myPosts/MyPosts";
import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={css.profile}>
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        addPost={props.addPost}
        changePostTextarea={props.changePostTextarea}
      />
    </div>
  );
};
export default Profile;
