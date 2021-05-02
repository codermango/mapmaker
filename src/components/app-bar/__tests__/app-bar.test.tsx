import { render } from "@testing-library/react";
import AppBar from "../app-bar";

test("renders correctly", () => {
  expect(render(<AppBar />).asFragment()).toMatchSnapshot();
});
