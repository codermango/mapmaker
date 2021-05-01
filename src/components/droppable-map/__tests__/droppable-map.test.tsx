import React from "react";
import { useDrop, useDrag } from "react-dnd";
import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import DroppableMap, {
  IDroppableMapProps,
  relativePosition,
} from "../droppable-map";

jest.mock("react-dnd");

const mockProps: IDroppableMapProps = {
  map: "testMap1",
  assets: [
    {
      uid: "testUid1",
      position: {
        x: 100,
        y: 100,
      },
      id: "testId1",
      url: "testUrl1",
      type: "testType1",
    },
    {
      uid: "testUid2",
      position: {
        x: 200,
        y: 200,
      },
      id: "testId2",
      url: "testUrl2",
      type: "testType2",
    },
  ],
  onAddAsset: jest.fn(),
  onMoveAsset: jest.fn(),
};

beforeEach(() => {
  useDrop.mockReturnValue([{ isOver: true }, null]);
  useDrag.mockReturnValue([]);
});

test("renders correctly", () => {
  const tree = renderer.create(<DroppableMap {...mockProps} />);
  expect(tree).toMatchSnapshot();
});

test("onDrop is triggered", () => {
  const { container } = render(<DroppableMap {...mockProps} />);
  fireEvent.drop(container);
  expect(useDrop).toBeCalledTimes(1);
});

test("relativePosition return correct data", () => {
  const assetPosition = { x: 500, y: 500 };
  const targetPosition = { x: 100, y: 200 };
  const expectedValue = { x: 384, y: 284 };
  const result = relativePosition(assetPosition, targetPosition);
  expect(result).toStrictEqual(expectedValue);
});
