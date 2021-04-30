import React, { MouseEvent, MouseEventHandler, useEffect, useRef } from "react";
import cx from "classnames";
import styles from "./tool-map.module.css";
import { mockData } from "../../mockData";
import DroppableMap from "./components/droppable-map/droppable-map";
import { useDispatch, useSelector } from "react-redux";
import { IToolMapState } from "./reducer";
import { IStoreState } from "../../app/store";
import { useDrop } from "react-dnd";
import { DraggableTypes } from "../tool-bar/constants";
import DraggableAsset, {
  IDraggableAsset,
} from "../draggable-asset/draggable-asset";
import { nanoid } from "@reduxjs/toolkit";

const ToolMap = () => {
  const mapUrl = mockData.map;
  const imgRef = useRef<HTMLImageElement>(null);
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableTypes.ASSET,
    drop: (item: IDraggableAsset, monitor) => {
      const assetXY = monitor.getClientOffset();
      const mapPosition = imgRef?.current?.getBoundingClientRect();

      if (assetXY && mapPosition) {
        const assetPositionX = assetXY.x - mapPosition.x;
        const assetPositionY = assetXY.y - mapPosition.y;

        const assetRecord: IDraggableAsset = {
          ...item,
          position: {
            x: assetPositionX,
            y: assetPositionY,
          }
        };

        if (item.uid) {
          dispatch({ type: "moveAssetInMap", payload: assetRecord });
        } else {
          assetRecord.uid = nanoid(8);
          dispatch({ type: "addAssetToMap", payload: assetRecord });
        }
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const assets = useSelector<IStoreState, IDraggableAsset[]>(
    (state) => state.toolMap.assets
  );

  return (
    <div className={cx(styles.toolMap, { [styles.draggingOver]: isOver })}>
      <div ref={drop} className={styles.mapWrapper}>
        <img className={styles.map} ref={imgRef} src={mapUrl} alt="map" />
        {assets.map((asset) => (
          <DraggableAsset
            asset={asset}
            key={asset.uid}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolMap;
