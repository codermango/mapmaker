import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { DraggableTypes } from "../tool-sidebar/constants";
import { IAsset } from "../tool-sidebar/tool-sidebar";

export interface IPosition {
  x: number;
  y: number;
}
export interface IDraggableAsset extends IAsset {
  uid?: string;
  position?: IPosition;
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
