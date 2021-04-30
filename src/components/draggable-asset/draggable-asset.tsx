import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { DraggableTypes } from "../tool-bar/constants";
export interface IDraggableAsset {
  uid?: string;
  id: string;
  url: string;
  type: string;
  position?: {
    x: number;
    y: number;
  };
}

export interface IDraggableAssetProps {
  asset: IDraggableAsset;
}

const DraggableAsset: FC<IDraggableAssetProps> = (props) => {
  const { asset } = props;
  const { uid, id, url, type, position } = asset;
  const [, drag] = useDrag<IDraggableAsset, IDraggableAsset, any>(() => ({
    item: {
      uid,
      id,
      url,
      type,
      position,
    },
    type: DraggableTypes.ASSET,
    // collect: (monitor) => ({
    //   isDragging: !!monitor.isDragging(),
    // }),
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
