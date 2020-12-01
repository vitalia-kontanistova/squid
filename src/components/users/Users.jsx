import React from "react";
import css from "./Users.module.css";

const Users = (props) => {
  debugger;

  //alert("props.users.length =  " + props.users.length);

  if (props.users.length === 0) {
    debugger;
    props.setUsers([
      {
        id: 1,
        followed: true,
        imgURL:
          "https://i.pinimg.com/originals/4e/ee/9a/4eee9a41d0a99079ad728201abe20668.jpg",
        fullName: "User 1",
        status: "status 1",
        location: { city: "city 1", country: "country 1" },
      },
      {
        id: 2,
        followed: false,
        imgURL:
          "https://i.pinimg.com/originals/4e/ee/9a/4eee9a41d0a99079ad728201abe20668.jpg",
        fullName: "User 2",
        status: "status 2",
        location: { city: "city 2", country: "country 2" },
      },
      {
        id: 3,
        followed: true,
        imgURL:
          "https://i.pinimg.com/originals/4e/ee/9a/4eee9a41d0a99079ad728201abe20668.jpg",
        fullName: "User 3",
        status: "status 3",
        location: { city: "city 3", country: "country 3" },
      },
    ]);
    debugger;
  }

  return (
    <div className={css.users}>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={css.user}>
            <div className={css.left_column}>
              <div className={css.img}>
                <img src={user.imgURL} alt="user img" />
              </div>
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
              <div>{user.fullName}</div>
              <div>{user.location.country + "," + user.location.sity}</div>
              <div>{user.status}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
