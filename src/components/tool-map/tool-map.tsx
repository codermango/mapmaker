import React, { MouseEvent, MouseEventHandler, useEffect, useRef } from 'react';
import styles from './tool-map.module.css';
import map from './map.png';

const ToolMap = () => {

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
    <div className={styles.toolMap}>
      <img ref={imgRef} src={map} alt="map" onMouseMove={handleMouseMove} />
    </div>
  )
}

export default ToolMap
