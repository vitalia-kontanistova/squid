import React from "react";
//import thumbDown from "./../../../assets/img/tD.png";
//import thumbUp from "./../../../assets/img/tU.png";
//import css from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  console.log(props.profile);
  return <div>{props.profile.fullName}</div>;
  /*
	return (
    <div className={css.profile_info}>
      <div className={css.user_info}>
        <div className={css.row}>
          <div className={css.ava}>
             <img src={props.profile.photos.large} alt="" /> 
          </div>
          <div className={css.info}>
            <div className={css.name}>{props.profile.fullName}</div>
            <div className={css.status}> {props.profile.aboutMe}</div>
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
	*/
};

export default ProfileInfo;
