import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import App from "../app";
import { store } from "../store";

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
