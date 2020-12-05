import * as axios from "axios";
import React from "react";
import userPhoto from "./../../assets/img/ava.png";
import css from "./Users.module.css";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalUsers(responce.data.totalCount);
      });
  }

  onPageChange = (page) => {
    this.props.setCurrentPage(page);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setUsers(responce.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(
        <span
          className={i === this.props.currentPage && css.selected}
          onClick={() => this.onPageChange(i)}
        >
          {i}
        </span>
      );
    }

    return (
      <div className={css.users}>
        <div className={css.pages}>{pages}</div>
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
