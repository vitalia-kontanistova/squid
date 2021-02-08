import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "104e209f-65fb-44e1-a272-296426fdf9f9" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 25) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instance
      .post(`follow/${userId}`, {})
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
};

export const authAPI = {
  setUserData() {
    return instance.get("auth/me").then((response) => response.data);
  },
};

export const profileAPI = {
  setUserProfile(userId) {
    return instance.get("profile/" + userId).then((response) => response.data);
  },
  getStatus(userId) {
    return instance
      .get("profile/status/" + userId)
      .then((response) => response.data);
  },
  updateStatus(status) {
    return instance
      .put("profile/status", { status })
      .then((response) => response.data);
  },
};
