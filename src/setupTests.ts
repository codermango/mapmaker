// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import { configureStore } from "@reduxjs/toolkit";
import "@testing-library/jest-dom";

import "react-redux";
import { IToolMapState, toolMapReducer } from "./components/tool-map/reducer";
import {
  IToolSidebarState,
  toolSidebarReducer,
} from "./components/tool-sidebar/reducer";

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
