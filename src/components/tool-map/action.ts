import { IDraggableAsset } from "../draggable-asset/draggable-asset";

export const addAssetToMap = (value: IDraggableAsset) => {
  return {
    type: "addAssetToMap",
    payload: value,
  };
};
