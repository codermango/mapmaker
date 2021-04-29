import React, { FC } from 'react'
import { useDrag } from 'react-dnd';
import { DraggableTypes } from '../../constants';

export interface IDraggableAsset {
  id: string;
  url: string;
}

const DraggableAsset: FC<IDraggableAsset> = (props) => {
  const { id, url } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: DraggableTypes.ASSET,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));
  return (
    <img ref={drag} src={url} alt={id} />
  )
}

export default DraggableAsset
