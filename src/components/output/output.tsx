import React, { useReducer } from 'react';
import { useSelector } from 'react-redux';
import { IStoreState } from '../../app/store';
import { IToolMapAsset, IToolMapState } from '../tool-map/reducer';

import styles from './output.module.css';

const Output = () => {

  const assets = useSelector<IStoreState, IToolMapAsset[]>(state => state.toolMap.assets);
  const parsedAssets = JSON.stringify(assets, null, 2);

  return (
    <div className={styles.output}>
      <div className={styles.action}>
        <button>Display</button>
        <button>Save to file</button>
      </div>
      <div className={styles.outputJson}>
        {/* {parsedAssets} */}
      </div>
    </div>
  )
}

export default Output
