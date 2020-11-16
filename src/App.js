import { Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/dialogs/Dialogs";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";

function App() {
	return (
		<div className="container">
			<div className="wrapper">
				<Header />
				<Navbar />
				<div className="content" >
					<Route path="/dialogs" component={Dialogs} />
					<Route path="/profile" component={Profile} />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;
