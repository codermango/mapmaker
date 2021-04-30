import React, { useCallback, useState } from "react";
import cx from "classnames";
import styles from "./tool-sidebar.module.css";
import AssetsBoard from "./components/assets-board/assets-board";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../app/store";
import { IToolSidebarState } from "./reducer";
import DroppableDustbin from "../droppable-dustbin/droppable-dustbin";
import { IDraggableAsset } from "../draggable-asset/draggable-asset";

export interface IAsset {
  id: string;
  url: string;
  type: string;
}

export interface IAssetCategory {
  name: string;
  assets: IAsset[];
}

export interface IToolSidebarProps {
  categories: IAssetCategory[];
}

const ToolSidebar = () => {
  const toolSidebarState = useSelector<IStoreState, IToolSidebarState>(
    (state) => state.toolSidebar
  );
  const dispatch = useDispatch();
  const { categories } = toolSidebarState;
  const [activeCategory, setActiveCategory] = useState("Flag");
  const category = categories.find((x) => x.name === activeCategory);

  const handleCategoryClick = useCallback(
    (name) => () => {
      setActiveCategory(name);
    },
    [setActiveCategory]
  );

  const handleDeleteAsset = (asset: IDraggableAsset) => {
    dispatch({ type: "deleteAssetFromMap", payload: asset });
  };

  return (
    <div className={styles.toolSidebar}>
      <div className={styles.sidebar}>
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

        <div className={cx(styles.categoryItem, styles.deleteIcon)}>
          <DroppableDustbin onDeleteAsset={handleDeleteAsset} />
        </div>
      </div>
      {category?.assets ? <AssetsBoard assets={category?.assets} /> : null}
    </div>
  );
};

export default ToolSidebar;
