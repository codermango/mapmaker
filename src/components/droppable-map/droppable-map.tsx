import React, { FC, useRef } from 'react';
import cx from 'classnames';
import { useDrop } from 'react-dnd';
import DraggableAsset, {
  IDraggableAsset,
} from "../draggable-asset/draggable-asset";

import styles from './droppable-map.module.css';
import { DraggableTypes } from '../tool-sidebar/constants';
import { nanoid } from '@reduxjs/toolkit';

export interface IDroppableMapProps {
  map: string;
  assets: IDraggableAsset[];
  onMoveAsset: (asset: IDraggableAsset) => void;
  onAddAsset: (asset: IDraggableAsset) => void;
}


const DroppableMap: FC<IDroppableMapProps> = (props) => {

  const { map, assets, onMoveAsset, onAddAsset } = props;
  const imgRef = useRef<HTMLImageElement>(null);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableTypes.ASSET,
    drop: (item: IDraggableAsset, monitor) => {
      const assetXY = monitor.getClientOffset();
      const mapPosition = imgRef?.current?.getBoundingClientRect();

      if (assetXY && mapPosition) {
        const assetPositionX = assetXY.x - mapPosition.x - 16;
        const assetPositionY = assetXY.y - mapPosition.y - 16;

        const assetRecord: IDraggableAsset = {
          ...item,
          position: {
            x: assetPositionX,
            y: assetPositionY,
          },
        };

        if (item.uid) {
          onMoveAsset(assetRecord);
        } else {
          assetRecord.uid = nanoid(8);
          onAddAsset(assetRecord);
        }
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div className={cx(styles.droppableMap, { [styles.draggingOver]: isOver })}>
      <div ref={drop} className={styles.mapWrapper}>
        <img className={styles.map} ref={imgRef} src={map} alt="map" />
        {assets.map((asset) => (
          <DraggableAsset asset={asset} key={asset.uid} />
        ))}
      </div>
    </div>
  )
}

export default DroppableMap
