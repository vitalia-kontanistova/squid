import React from "react";
import Preloader from "../preloader/Preloader";
import MyPostsContainer from "./myPosts/MyPostsContainer";
import css from "./Profile.module.css";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={css.profile}>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <ProfileInfo profile={props.profile} />
      )}
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
