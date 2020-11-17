import React from "react";
import css from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={css.profile_info}>
      <div className={css.img}>
        <img
          src="https://image.freepik.com/free-photo/top-view-sand-meeting-seawater_158595-6255.jpg"
          alt="sea img"
        ></img>
      </div>
      <div className={css.user_info}>ava + info</div>
    </div>
  );
};
export default ProfileInfo;
