import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/img/ava.png";
import css from "./Users.module.css";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(
      <span
        className={i === props.currentPage && css.selected}
        onClick={() => props.onPageChange(i)}
      >
        {i}
      </span>
    );
  }

  return (
    <div className={css.users}>
      <div className={css.pages}>{pages}</div>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={css.user}>
            <div className={css.left_column}>
              <NavLink to={"/profile/" + user.id} className={css.img}>
                <img
                  src={
                    user.photos.small === null ? userPhoto : user.photos.small
                  }
                  alt="user img"
                />
              </NavLink>
              <div>
                <button
                  className={css.follow_btn}
                  onClick={() => {
                    props.followToggle(user.id);
                  }}
                >
                  {user.followed ? "Unfollow" : "Follow"}
                </button>
              </div>
            </div>

            <div className={css.right_column}>
              <div>{user.name}</div>
              <div>{"user.location.country, user.location.sity"}</div>
              <div>{user.status}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
