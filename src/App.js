import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Footer from "./components/footer/Footer.jsx";
import HeaderContainer from "./components/header/HeaderContainer.jsx";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import ProfileContainer from "./components/profile/ProfileContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";
import LogInContainer from "./components/logIn/LogInContainer";
import Test from "./components/test/Test";
import { initializeThunkCreator } from "./redux/app_reducer";
import { connect } from "react-redux";
import Preloader from "./components/preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.isInitialized) {
      return <Preloader />;
    } else {
      return (
        <div className="container">
          <div className="wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="content">
              <Route
                path="/profile/:userId?"
                render={() => <ProfileContainer />}
              />
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/users" render={() => <UsersContainer />} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/settings" component={Settings} />
              <Route path="/logIn" component={LogInContainer} />
              <Route path="/test" component={Test} />
            </div>
            <Footer />
          </div>
        </div>
      );
    }
  }
}

let mapStateToProps = (state) => ({
  isInitialized: state.app.isInitialized,
});
export default connect(mapStateToProps, {
  initializeApp: initializeThunkCreator,
})(App);
