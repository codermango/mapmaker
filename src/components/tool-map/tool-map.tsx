import React, { MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';
import cx from 'classnames';
import styles from './tool-map.module.css';
import { mockData } from '../../mockData';
import DroppableMap from './components/droppable-map/droppable-map';
import { useDispatch, useSelector } from 'react-redux';
import { IToolMapAsset, IToolMapState } from './reducer';
import { IStoreState } from '../../app/store';
import { useDrop } from 'react-dnd';
import { DraggableTypes } from '../tool-bar/constants';

const ToolMap = () => {
  const mapUrl = mockData.map;
  const imgRef = useRef<HTMLImageElement>(null);
  const dispatch = useDispatch()

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableTypes.ASSET,
    drop: (item: any, monitor) => {
      const assetXY = monitor.getClientOffset();
      const mapPosition = imgRef?.current?.getBoundingClientRect();

      if (assetXY && mapPosition) {
        const assetPositionX = assetXY.x - mapPosition.x;
        const assetPositionY = assetXY.y - mapPosition.y;
        const assetRecord: IToolMapAsset = {
          id: item.id,
          url: item.url,
          type: item.type,
          position: {
            x: assetPositionX,
            y: assetPositionY
          }
        };

        dispatch({ type: "addAssetToMap", payload: assetRecord });
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const assets = useSelector<IStoreState, IToolMapAsset[]>(state => state.toolMap.assets);

  return (
    <div className={cx(styles.toolMap, { [styles.draggingOver]: isOver })}>
      <div ref={drop} className={styles.mapWrapper}>
        <img ref={imgRef} src={mapUrl} alt="map" />
        {assets.map(asset => <img className={styles.asset} style={{ top: asset.position.y, left: asset.position.x }} src={asset.url} alt={asset.id} />)}
      </div>
    </div>
  )
}

export default ToolMap
