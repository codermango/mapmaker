import { renderWithDnd } from "../../../testHelper";
import DroppableDustbin from "../droppable-dustbin";

test("render correctly", () => {
  expect(
    renderWithDnd(<DroppableDustbin onDeleteAsset={jest.fn()} />).asFragment()
  ).toMatchSnapshot();
});
