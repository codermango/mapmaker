import { renderWithReduxAndDnd } from "../../../testHelper";
import ToolMap from "../tool-map";

test("render correctly", () => {
  expect(renderWithReduxAndDnd(<ToolMap />).asFragment).toMatchSnapshot();
});
