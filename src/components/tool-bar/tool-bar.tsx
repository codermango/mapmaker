import React from 'react'
import styles from './tool-bar.module.css';
import flag1 from './flag1.png';
import flag2 from './flag2.png';

const ToolBar = () => {
  return (
    <div className={styles.toolBar}>
      <div className={styles.categories}>
        <div className={styles.categoryItem}>
          Flag
        </div>
        <div className={styles.categoryItem}>
          Vehicle
        </div>
        <div className={styles.categoryItem}>
          Aircraft
        </div>
        <div className={styles.categoryItem}>
          Ship
        </div>
      </div>

      <div className={styles.categoryContent}>
        <div className={styles.element}>
          <img className={styles.elementImage} src={flag1} alt="flag1" />
        </div>
        <div className={styles.element}>
          <img className={styles.elementImage} src={flag2} alt="flag2" />
        </div>
      </div>
    </div>
  )
}

export default ToolBar
