import React from "react";
import preloader from "../../assets/img/preloader.gif";
import css from "./Preloader.module.css";

const Preloader = () => {
  return <img className={css.img} src={preloader} alt="alt" />;
};

export default Preloader;
