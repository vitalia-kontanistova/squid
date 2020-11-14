import "./App.css";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
	return (
		<div className="container">
			<div className="wrapper">
				<Header />
				<Navbar />
				<Profile />
				<Footer />
			</div>
		</div>
	);
}

export default App;
