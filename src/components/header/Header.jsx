import React from "react";
import css from "./Header.module.css";

const Header = () => {
	return (
		<header className={css.header}>
			<div className={css.logo}>
				<img src="https://i.pinimg.com/originals/86/b2/48/86b2489d04f827da9e36f05a237292dd.jpg" alt="logo"></img>
			</div>
			<div className={css.title}>SquidWords</div>
		</header>
	);
}
export default Header;
 