import React from 'react';
import styles from './output.module.css';

const Output = () => {
  return (
    <div className={styles.output}>
      <div className={styles.action}>
        <button>Display</button>
        <button>Save to file</button>
      </div>
      <div className={styles.outputJson}></div>
    </div>
  )
}

export default Output
