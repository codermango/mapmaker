import { mockData } from "../../mockData";
import { IAssetCategory } from "./tool-sidebar";

export interface IToolSidebarState {
  categories: IAssetCategory[];
}

const initialState: IToolSidebarState = {
  categories: mockData.categories,
};

export const toolSidebarReducer = (state = initialState, action: any) => {
  return state;
};
