import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IStoreState } from "../../app/store";
import {
  IDraggableAsset,
} from "../draggable-asset/draggable-asset";
import DroppableMap from "../droppable-map/droppable-map";
import { IToolMapState } from "./reducer";

const ToolMap = () => {
  const toolMapState = useSelector<IStoreState, IToolMapState>(state => state.toolMap);
  const dispatch = useDispatch();

  const { map, assets } = toolMapState;

  const handleAddAsset = (asset: IDraggableAsset) => {
    dispatch({ type: "addAssetToMap", payload: asset });
  }

  const handleMoveAsset = (asset: IDraggableAsset) => {
    dispatch({ type: "moveAssetInMap", payload: asset });
  }

  return <DroppableMap map={map} assets={assets} onAddAsset={handleAddAsset} onMoveAsset={handleMoveAsset} />
};

export default ToolMap;
