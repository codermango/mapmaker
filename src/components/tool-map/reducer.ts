import { mockData } from "../../mockData";
import { IDraggableAsset } from "../draggable-asset/draggable-asset";

export interface IToolMapState {
  map: string;
  assets: IDraggableAsset[];
}

const initialState: IToolMapState = {
  map: mockData.map,
  assets: [],
};

export const toolMapReducer = (
  state = initialState,
  action: any
): IToolMapState => {
  switch (action.type) {
    case "addAssetToMap": {
      return {
        ...state,
        assets: [...state.assets, action.payload],
      };
    }

    case "deleteAssetFromMap": {
      const deletingAssetIdx = state.assets.findIndex(
        (x) => x.uid === action.payload.uid
      );
      const newAssets = [
        ...state.assets.slice(0, deletingAssetIdx),
        ...state.assets.slice(deletingAssetIdx + 1),
      ];
      return {
        ...state,
        assets: newAssets,
      };
    }

    case "moveAssetInMap": {
      const movingAssetIdx = state.assets.findIndex(
        (x) => x.uid === action.payload.uid
      );
      const newAsset = {
        ...state.assets[movingAssetIdx],
        position: action.payload.position,
      };
      const newAssets = [
        ...state.assets.slice(0, movingAssetIdx),
        newAsset,
        ...state.assets.slice(movingAssetIdx + 1),
      ];
      return {
        ...state,
        assets: newAssets,
      };
    }

    case "loadAssetsToMap": {
      return {
        ...state,
        assets: action.payload,
      };
    }

    default:
      return state;
  }
};
