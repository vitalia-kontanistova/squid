import { Route } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import ProfileContainer from "./components/profile/ProfileContainer";
import Settings from "./components/settings/Settings";
import UsersContainer from "./components/users/UsersContainer";

function App(props) {
	return (
		<div className="container">
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className="content" >
					<Route path="/profile" render={() => <ProfileContainer />} />
					<Route path="/dialogs" render={() => <DialogsContainer />} />
					<Route path="/users" render={() => <UsersContainer />} />
					<Route path="/news" component={News} />
					<Route path="/music" component={Music} />
					<Route path="/settings" component={Settings} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
