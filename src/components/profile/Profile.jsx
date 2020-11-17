import React from "react";
import MyPosts from "./myPosts/MyPosts";
import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={css.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};
export default Profile;
