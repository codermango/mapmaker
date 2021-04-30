import { mockData } from "../../mockData";
import { IDraggableAsset } from "../draggable-asset/draggable-asset";

export interface IToolMapState {
  assets: IDraggableAsset[];
}

const initialState: IToolMapState = {
  assets: [],
};

export const toolMapReducer = (
  state = initialState,
  action: any
): IToolMapState => {
  switch (action.type) {
    case "addAssetToMap":
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    case "moveAssetInMap":
      const movingAssetIdx = state.assets.findIndex(x => x.uid === action.payload.uid);
      const newAsset = { ...state.assets[movingAssetIdx], position: action.payload.position };
      const newAssets = [...state.assets.slice(0, movingAssetIdx), newAsset, ...state.assets.slice(movingAssetIdx + 1)];
      return {
        ...state,
        assets: newAssets
      };
    default:
      return state;
  }
};
