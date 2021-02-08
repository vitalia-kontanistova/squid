import React from "react";
import Preloader from "../../preloader/Preloader";
import thumbDown from "./../../../assets/img/tD.png";
import thumbUp from "./../../../assets/img/tU.png";
import ava from "./../../../assets/img/ava.png";
import css from "./ProfileInfo.module.css";
import ProfileStatus from "../profileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={css.profile_info}>
        <div className={css.user_info}>
          <div className={css.row}>
            <div className={css.ava}>
              <img src={props.profile.photos.large || ava} alt="" />
            </div>
            <div className={css.info}>
              <div className={css.name}>{props.profile.fullName}</div>
              <ProfileStatus {...props} />
              <div className={css.job}>
                <div>
                  Looking for a job:
                  <img
                    src={props.profile.lookingForAJob ? thumbUp : thumbDown}
                    alt=""
                  />
                </div>
                <div>{props.profile.lookingForAJobDescription}</div>
              </div>
            </div>
          </div>
          <div>Contacts:</div>
          <div className={css.contacts}>
            <span>{props.profile.contacts.facebook}</span>
            <span>{props.profile.contacts.website}</span>
            <span>{props.profile.contacts.vk}</span>
            <span>{props.profile.contacts.twitter}</span>
            <span>{props.profile.contacts.instagram}</span>
            <span>{props.profile.contacts.youtube}</span>
            <span>{props.profile.contacts.github}</span>
            <span>{props.profile.contacts.mainLink}</span>
          </div>
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
