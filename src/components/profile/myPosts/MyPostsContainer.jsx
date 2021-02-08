import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { sendPost } from "../../../redux/profile_reducer";

let mapStateToProps = (state) => ({
  postData: state.profilePage.postData,
});

const MyPostsContainer = connect(mapStateToProps, { sendPost })(MyPosts);

export default MyPostsContainer;
