import { connect } from "react-redux";
import { addPost, changePost } from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => ({
  postData: state.profilePage.postData,
  newPostText: state.profilePage.newPostText,
});

const MyPostsContainer = connect(mapStateToProps, { addPost, changePost })(
  MyPosts
);

export default MyPostsContainer;
