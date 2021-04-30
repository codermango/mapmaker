import React, { useCallback, useState } from "react";
import cx from "classnames";
import styles from "./tool-sidebar.module.css";
import { mockData } from "../../mockData";
import AssetsBoard from "./components/assets-board/assets-board";

export interface IToolBarProps {}

const ToolSidebar = () => {
  const categories = mockData.categories;
  const [activeCategory, setActiveCategory] = useState("Flag");
  const category = categories.find((x) => x.name === activeCategory);

  const handleCategoryClick = useCallback(
    (name) => () => {
      setActiveCategory(name);
    },
    []
  );

  return (
    <div className={styles.toolBar}>
      <div className={styles.categories}>
        {categories.map((x) => (
          <div
            key={x.name}
            className={cx(styles.categoryItem, {
              [styles.active]: activeCategory === x.name,
            })}
            onClick={handleCategoryClick(x.name)}
          >
            {x.name}
          </div>
        ))}
      </div>
      {category?.assets ? <AssetsBoard assets={category?.assets} /> : null}
    </div>
  );
};

export default ToolSidebar;