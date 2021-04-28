import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../app/store';
import { IToolMapState } from '../tool-map/reducer';

import styles from './output.module.css';

const Output = () => {

  const pointer = useSelector<IStoreState, IToolMapState>(state => state.toolMap);

  return (
    <div className={styles.output}>
      <div className={styles.action}>
        <button>Display</button>
        <button>Save to file</button>
      </div>
      <div className={styles.outputJson}>
        <div>ponter x: {pointer.pointerX}</div>
        <div>ponter y: {pointer.pointerY}</div>
      </div>
    </div>
  )
}

export default Output
