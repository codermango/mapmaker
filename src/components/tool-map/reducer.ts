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
    default:
      return state;
  }
};
