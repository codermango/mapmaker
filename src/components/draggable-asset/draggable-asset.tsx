import React, { FC } from "react";
import { useDrag } from "react-dnd";
import cx from "classnames";
import { DraggableTypes } from "../tool-bar/constants";
import styles from "./draggable-asset.module.css";

export interface IDraggableAsset {
  id: string;
  url: string;
  type: string;
  position?: {
    x: number;
    y: number;
  };
}

const DraggableAsset: FC<IDraggableAsset> = (props) => {
  const { id, url, type, position } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    item: {
      id,
      url,
      type,
    },
    type: DraggableTypes.ASSET,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      alt={id}
      style={
        position
          ? { position: "absolute", top: position.y, left: position.x }
          : undefined
      }
    />
  );
};

export default DraggableAsset;
