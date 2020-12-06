import React from "react";
import preloader from "../../assets/img/preloader.gif";
import css from "./Preloader.module.css";

class Preloader extends React.Component {
  render() {
    return <img className={css.img} src={preloader} alt="alt" />;
  }
}

export default Preloader;
