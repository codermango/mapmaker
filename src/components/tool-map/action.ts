import { IToolMapAsset } from "./reducer";

export const addAssetToMap = (value: IToolMapAsset) => {
  return {
    type: 'addAssetToMap',
    payload: value
  };
}