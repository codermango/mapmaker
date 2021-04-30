import React from "react";
import styles from "./app-bar.module.css";
import logo from "./logo.png";

const AppBar = () => {
  return (
    <div className={styles.appBar}>
      {/* <img className={styles.logo} src={logo} alt="logo" /> */}
      In order for the tool to work properly, please make sure your broswer zoom
      is 100%
    </div>
  );
};

export default AppBar;
