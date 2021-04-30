import React, { FC } from "react";
import styles from "./app.module.css";
import ToolBar from "../components/tool-bar/tool-bar";
import AppBar from "../components/app-bar/app-bar";
import Output from "../components/output/output";
import ToolMap from "../components/tool-map/tool-map";

const App: FC = () => {
  return (
    <div className={styles.app}>
      <AppBar />
      <div className={styles.content}>
        <ToolBar />
        <ToolMap />
      </div>
      <Output />
    </div>
  );
};

export default App;
