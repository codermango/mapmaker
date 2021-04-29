import { mockData } from "../../mockData";

export interface IToolMapAsset {
  id: string;
  url: string;
  type: string;
  position: {
    x: number;
    y: number;
  };
}

export interface IToolMapState {
  assets: IToolMapAsset[];
}

const initialState: IToolMapState = {
  assets: []
}

export const toolMapReducer = (state = initialState, action: any): IToolMapState => {
  switch (action.type) {
    case "addAssetToMap":
      return {
        ...state,
        assets: [...state.assets, action.payload]
      }
    default:
      return state;
  }
} 