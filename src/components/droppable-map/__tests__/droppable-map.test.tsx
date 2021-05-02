import DroppableMap, {
  IDroppableMapProps,
  relativePosition,
} from "../droppable-map";
import { renderWithDnd } from "../../../testHelper";

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

test("renders correctly", () => {
  expect(
    renderWithDnd(<DroppableMap {...mockProps} />).asFragment
  ).toMatchSnapshot();
});

test("relativePosition return correct data", () => {
  const assetPosition = { x: 500, y: 500 };
  const targetPosition = { x: 100, y: 200 };
  const expectedValue = { x: 384, y: 284 };
  const result = relativePosition(assetPosition, targetPosition);
  expect(result).toStrictEqual(expectedValue);
});
