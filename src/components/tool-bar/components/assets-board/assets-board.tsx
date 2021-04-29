import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { DraggableTypes } from '../../constants';
import DraggableAsset, { IDraggableAsset } from '../draggable-asset/draggable-asset';
import styles from './assets-board.module.css';

export interface IAssetsBoardProps {
  assets: IDraggableAsset[]
}

const AssetsBoard: FC<IAssetsBoardProps> = (props) => {
  const { assets } = props;

  return (
    <div className={styles.assetsBoard}>
        {assets.map(x => (
          <div key={x.id} className={styles.element}>
            <DraggableAsset id={x.id} url={x.url} />
          </div>
        ))}
      </div>
  )
}

export default AssetsBoard
