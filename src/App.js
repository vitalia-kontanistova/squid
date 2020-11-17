import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Music from "./components/music/Music";
import Navbar from "./components/navbar/Navbar";
import News from "./components/news/News";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";

function App() {
	return (
		<BrowserRouter>
			<div className="container">
				<div className="wrapper">
					<Header />
					<Navbar />
					<div className="content" >
						<Route path="/profile" component={Profile} />
						<Route /*exact*/ path="/dialogs" component={Dialogs} />
						<Route path="/news" component={News} />
						<Route path="/music" component={Music} />
						<Route path="/settings" component={Settings} />
					</div>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
