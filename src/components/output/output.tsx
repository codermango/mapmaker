import React, { useReducer } from "react";
import { useSelector } from "react-redux";
import { IStoreState } from "../../app/store";
import { IDraggableAsset } from "../draggable-asset/draggable-asset";
import { IToolMapState } from "../tool-map/reducer";

import styles from "./output.module.css";

const Output = () => {
  const assets = useSelector<IStoreState, IDraggableAsset[]>(
    (state) => state.toolMap.assets
  );

  const outputContent = {
    assets: assets.map(x => ({ ...x, url: x.url.substring(0, 30) + "..." }))
  };
  const parsedAssets = JSON.stringify(outputContent, null, 2);

  return (
    <div className={styles.output}>
      <div className={styles.action}>
        <button>Display</button>
        <button>Save to file</button>
      </div>
      <pre className={styles.outputJson}>
        {parsedAssets}
      </pre>
    </div>
  );
};

export default Output;
