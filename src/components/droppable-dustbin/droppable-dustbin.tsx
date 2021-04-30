import React, { FC } from "react";
import cx from "classnames";
import styles from "./droppable-dustbin.module.css";
import deleteIcon from "../../images/delete.png";
import { useDrop } from "react-dnd";
import { DraggableTypes } from "../tool-sidebar/constants";
import { IDraggableAsset } from "../draggable-asset/draggable-asset";

export interface IDroppableDustbinProps {
  onDeleteAsset: (asset: IDraggableAsset) => void;
}

const DroppableDustbin: FC<IDroppableDustbinProps> = (props) => {
  const { onDeleteAsset } = props;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableTypes.ASSET,
    drop: (item: IDraggableAsset, monitor) => {
      if (item.uid) {
        onDeleteAsset(item);
      }
    },
    collect: (monitor) => {
      const item = monitor.getItem<IDraggableAsset>();
      return {
        isOver: !!monitor.isOver() && item.uid,
      };
    },
  }));

  return (
    <img
      ref={drop}
      className={cx(styles.deleteImg, { [styles.hover]: isOver })}
      src={deleteIcon}
      alt="dustbin"
    />
  );
};

export default DroppableDustbin;
