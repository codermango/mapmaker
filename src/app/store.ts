import { configureStore } from "@reduxjs/toolkit";
import { IToolMapState, toolMapReducer } from "../components/tool-map/reducer";

export interface IStoreState {
  toolMap: IToolMapState;
}

export const store = configureStore<IStoreState>({
  reducer: {
    toolMap: toolMapReducer,
  },
});
