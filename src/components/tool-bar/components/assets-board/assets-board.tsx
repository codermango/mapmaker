import React, { FC } from "react";
import DraggableAsset, {
  IDraggableAsset,
} from "../../../draggable-asset/draggable-asset";
import styles from "./assets-board.module.css";

export interface IAssetsBoardProps {
  assets: IDraggableAsset[];
}

const AssetsBoard: FC<IAssetsBoardProps> = (props) => {
  const { assets } = props;

  return (
    <div className={styles.assetsBoard}>
      {assets.map((x) => (
        <div key={x.id} className={styles.element}>
          <DraggableAsset asset={x} />
        </div>
      ))}
    </div>
  );
};

export default AssetsBoard;
