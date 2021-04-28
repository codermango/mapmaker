import React from 'react';
import styles from './tool-map.module.css';
import map from './map.png';

const ToolMap = () => {
  return (
    <div className={styles.toolMap}>
      <img src={map} alt="map" />
    </div>
  )
}

export default ToolMap
