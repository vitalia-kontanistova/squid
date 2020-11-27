import { connect } from "react-redux";
import {
  addPostCreator,
  changePostBodyCreator,
} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => ({
  postData: state.profilePage.postData,
  newPostText: state.profilePage.newPostText,
});
let mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPostCreator()),
  changePostBody: (userPost) => dispatch(changePostBodyCreator(userPost)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
