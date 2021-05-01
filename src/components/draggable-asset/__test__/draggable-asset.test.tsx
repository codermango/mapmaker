import React from "react";
import { useDrag } from "react-dnd";
import { render, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import DraggableAsset, { IDraggableAsset } from "../draggable-asset";

jest.mock("react-dnd");

// axios as jest.Mocked<typeof axios

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

beforeEach(() => {
  useDrag.mockReturnValue([]);
});

test("renders correctly in tool sidebar", () => {
  const tree = renderer.create(<DraggableAsset asset={mockAssetSidebar} />);
  expect(tree).toMatchSnapshot();
});

test("renders correctly in map", () => {
  const tree = renderer.create(<DraggableAsset asset={mockAssetMap} />);
  expect(tree).toMatchSnapshot();
});

test("onDrag is triggered when drag from tool sidebar", () => {
  const { container } = render(<DraggableAsset asset={mockAssetSidebar} />);
  fireEvent.drag(container);
  expect(useDrag).toHaveBeenCalledTimes(1);
});

test("onDrag is triggered when drag from map", () => {
  const { container } = render(<DraggableAsset asset={mockAssetMap} />);
  fireEvent.drag(container);
  expect(useDrag).toHaveBeenCalledTimes(1);
});
