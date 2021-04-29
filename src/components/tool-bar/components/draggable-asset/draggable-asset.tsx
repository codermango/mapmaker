import React, { FC } from "react";
import { useDrag } from "react-dnd";
import { DraggableTypes } from "../../constants";

export interface IDraggableAsset {
  id: string;
  url: string;
  type: string;
}

const DraggableAsset: FC<IDraggableAsset> = (props) => {
  const { id, url, type } = props;
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
  return <img ref={drag} src={url} alt={id} />;
};

export default DraggableAsset;
