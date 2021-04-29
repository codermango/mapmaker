import React, { MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';
import cx from 'classnames';
import styles from './tool-map.module.css';
import { mockData } from '../../mockData';
import DroppableMap from './components/droppable-map/droppable-map';
import { useSelector } from 'react-redux';
import { IToolMapState } from './reducer';
import { IStoreState } from '../../app/store';
import { useDrop } from 'react-dnd';
import { DraggableTypes } from '../tool-bar/constants';

const ToolMap = () => {
  const mapUrl = mockData.map;

  const [{ isOver }, drop] = useDrop(() => ({
    accept: DraggableTypes.ASSET,
    drop: (item, monitor) => {
      console.log(item)
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  // console.log(isDragging)

  const imgRef = useRef<HTMLImageElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLImageElement>) => {
    // console.log(e)
  }

  // const handleMouseOver = (e: MouseEvent<HTMLImageElement>) => {
  //   console.log(e.pageX);

  //   if (imgRef.current) {
  //     console.log(imgRef.current.getBoundingClientRect())
  //   }

    
  // }


  return (
    <div className={cx(styles.toolMap, { [styles.draggingOver]: isOver })}>
      {/* <DroppableMap mapUrl={mapUrl} /> */}
      <img ref={drop} src={mapUrl} alt="map" />
    </div>
  )
}

export default ToolMap
