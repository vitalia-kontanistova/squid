import React from "react";
import css from "./Footer.module.css";

class Footer extends React.Component {
  render() {
    return (
      <footer className={css.footer}>
        © SquidWords 2020 -{" "}
        <span className={`${css.bold} ${css.blue}`}>See u in sea!</span>
      </footer>
    );
  }
}

export default Footer;
