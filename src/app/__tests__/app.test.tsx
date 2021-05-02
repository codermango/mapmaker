import { renderWithReduxAndDnd } from "../../testHelper";
import App from "../app";

test("renders correctly", () => {
  expect(renderWithReduxAndDnd(<App />).asFragment()).toMatchSnapshot();
});
