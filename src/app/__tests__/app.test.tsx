import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import {
  IToolMapState,
  toolMapReducer,
} from "../../components/tool-map/reducer";
import {
  IToolSidebarState,
  toolSidebarReducer,
} from "../../components/tool-sidebar/reducer";
import App from "../app";

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

test("renders correctly", () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
