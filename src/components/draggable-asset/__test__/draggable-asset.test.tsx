import React from "react";
import { useDrag } from "react-dnd";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import DraggableAsset, { IDraggableAsset } from "../draggable-asset";
import { renderWithDnd, renderWithReduxAndDnd } from "../../../testHelper";
import userEvent from "@testing-library/user-event";

const mockAssetSidebar: IDraggableAsset = {
  id: "testId1",
  url: "testUrl1",
  type: "testType1",
};

const mockAssetMap: IDraggableAsset = {
  uid: "testUid1",
  position: {
    x: 100,
    y: 100,
  },
  id: "testId1",
  url: "testUrl1",
  type: "testType1",
};

test("renders correctly in tool sidebar", () => {
  expect(
    renderWithDnd(<DraggableAsset asset={mockAssetSidebar} />).asFragment()
  ).toMatchSnapshot();
});

test("renders correctly in map", () => {
  expect(
    renderWithDnd(<DraggableAsset asset={mockAssetMap} />).asFragment()
  ).toMatchSnapshot();
});

test("onDrag is triggered when drag from tool sidebar", () => {
  const { container } = renderWithDnd(
    <DraggableAsset asset={mockAssetSidebar} />
  );
  container.ondrag = jest.fn();
  fireEvent.drag(container);
  expect(container.ondrag).toHaveBeenCalledTimes(1);
});

test("onDrag is triggered when drag from map", () => {
  const { container } = renderWithDnd(<DraggableAsset asset={mockAssetMap} />);
  container.ondrag = jest.fn();
  fireEvent.drag(container);
  expect(container.ondrag).toHaveBeenCalledTimes(1);
});
