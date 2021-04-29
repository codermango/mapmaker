import React, { FC } from "react";
import { useDrop } from "react-dnd";
import DraggableAsset from "../../../draggable-asset/draggable-asset";
import { DraggableTypes } from "../../../tool-bar/constants";

export interface IDroppableMapProps {
  mapUrl: string;
}

const DroppableMap: FC<IDroppableMapProps> = (props) => {
  const { mapUrl } = props;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableTypes.ASSET,
    drop: () => {},
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  console.log(isOver);

  return (
    <div ref={drop}>
      <img src={mapUrl} alt="map" />
    </div>
  );
};

export default DroppableMap;
