import React from "react";
import css from "./Navbar.module.css";

const Navbar = () => {
	return (
		<nav className={css.nav}>
			<ul className={css.list}>
				<li className={css.item}><a href="/profile">Profile</a></li>
				<li className={css.item}><a href="/dialogs">Mesages</a></li>
				<li className={css.item}><a>News</a></li>
				<li className={css.item}><a>Music</a></li>
				<li className={css.item}><a>Settings</a></li>
			</ul>
		</nav>
	);
}
export default Navbar;
 