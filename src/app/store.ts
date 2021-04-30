import { configureStore } from "@reduxjs/toolkit";
import { IToolMapState, toolMapReducer } from "../components/tool-map/reducer";
import {
  IToolSidebarState,
  toolSidebarReducer,
} from "../components/tool-sidebar/reducer";

export interface IStoreState {
  toolMap: IToolMapState;
  toolSidebar: IToolSidebarState;
}

export const store = configureStore<IStoreState>({
  reducer: {
    toolMap: toolMapReducer,
    toolSidebar: toolSidebarReducer,
  },
});
