import * as axios from "axios";
import React from "react";
import userPhoto from "./../../assets/img/ava.png";
import css from "./Users.module.css";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((responce) => {
        this.props.setUsers(responce.data.items);
      });
  }

  render() {
    return (
      <div className={css.users}>
        {this.props.users.map((user) => {
          return (
            <div key={user.id} className={css.user}>
              <div className={css.left_column}>
                <div className={css.img}>
                  <img
                    src={
                      user.photos.small === null ? userPhoto : user.photos.small
                    }
                    alt="user img"
                  />
                </div>
                <div>
                  <button
                    className={css.follow_btn}
                    onClick={() => {
                      this.props.followToggle(user.id);
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
  }
}

export default Users;
