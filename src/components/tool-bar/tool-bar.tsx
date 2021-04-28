import React, { useCallback, useState } from 'react'
import cx from 'classnames';
import styles from './tool-bar.module.css';
import { mockData } from '../../mockData';

export interface IToolBarProps {

}

const ToolBar = () => {

  const categories = mockData.categories;
  const [activeCategory, setActiveCategory] = useState("Flag");
  const category = categories.find(x => x.name === activeCategory);

  const handleCategoryClick = useCallback((name) => () => {
    setActiveCategory(name);
  }, [])

  return (
    <div className={styles.toolBar}>
      <div className={styles.categories}>
        {categories.map(x => (
          <div className={cx(styles.categoryItem, { [styles.active]: activeCategory === x.name})} onClick={handleCategoryClick(x.name)}>
            {x.name}
          </div>))}
      </div>

      <div className={styles.categoryContent}>
        {category?.assets.map(x => (
          <div className={styles.element}>
            <img className={styles.elementImage} src={x.url} alt={x.id} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToolBar
