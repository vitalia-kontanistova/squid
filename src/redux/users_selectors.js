export const getUsers = (state) => {
  return state.usersPage.users;
};
export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};
export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount;
};
export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};
export const getIsFetching = (state) => {
  return state.usersPage.isFetching;
};
export const getToggleFollowingProgress = (state) => {
  return state.usersPage.toggleFollowingProgress;
};
