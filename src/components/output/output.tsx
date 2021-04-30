import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../app/store";
import { IDraggableAsset } from "../draggable-asset/draggable-asset";

import styles from "./output.module.css";

const Output = () => {
  const assets = useSelector<IStoreState, IDraggableAsset[]>(
    (state) => state.toolMap.assets
  );
  const [result, setResult] = useState<string>();

  const dispatch = useDispatch();

  const handleDisplay = () => {
    const outputContent = assets.map((x) => ({
      ...x,
      url: x.url.substring(0, 30) + "...",
    }));
    const parsedAssets = JSON.stringify(outputContent, null, 2);
    setResult(parsedAssets);
  };

  const handleLoadLevel = (evt: any) => {
    const levelFile = evt.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (ev: any) => {
      const loadedAssets = ev.target.result;
      dispatch({ type: "loadAssetsToMap", payload: JSON.parse(loadedAssets) });
    };

    fileReader.readAsText(levelFile);
  };

  return (
    <div className={styles.output}>
      <div className={styles.action}>
        <button className={styles.button} onClick={handleDisplay}>
          Display
        </button>
        <a
          className={styles.button}
          download="level.json"
          href={`data:application/octet-stream,${JSON.stringify(assets)}`}
        >
          Save level
        </a>
        <button className={styles.button}>
          Upload level
          <input
            className={styles.uploadBtn}
            type="file"
            id="file-selector"
            onChange={handleLoadLevel}
          />
        </button>
      </div>
      <pre className={styles.outputJson}>{result}</pre>
    </div>
  );
};

export default Output;
