import React from "react";
import logo from "./logo.svg";
import styles from "./app.module.css";
import ToolBar from "../components/tool-bar/tool-bar";
import AppBar from "../components/app-bar/app-bar";
import Output from "../components/output/output";
import ToolMap from "../components/tool-map/tool-map";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className={styles.app}>
      <AppBar />
      <DndProvider backend={HTML5Backend}>
        <div className={styles.content}>
          <ToolBar />
          <ToolMap />
        </div>
      </DndProvider>

      <Output />
    </div>
  );
}

export default App;
