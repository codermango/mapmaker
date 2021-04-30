import React from "react";
import renderer from "react-test-renderer";
import AppBar from "../app-bar";

test("renders correctly", () => {
  const tree = renderer.create(<AppBar />);
  expect(tree).toMatchSnapshot();
});
