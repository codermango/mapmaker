import { render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import userEvent from "@testing-library/user-event";
import Output from "../output";

jest.mock("react-redux");

const mockAssets = [
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
];

beforeEach(() => {
  useSelector.mockReturnValue(mockAssets);
});

test("render correctly", () => {
  // render(<Output />);
  expect(render(<Output />).asFragment()).toMatchSnapshot();
});

test("render action buttons correctly", () => {
  render(<Output />);
  expect(screen.getByText("Display")).toBeInTheDocument();
  expect(screen.getByText("Save level")).toBeInTheDocument();
  expect(screen.getByText("Upload level")).toBeInTheDocument();
});

test("action buttons click work correctly", () => {
  render(<Output />);
  const displayButton = screen.getByText("Display");
  const saveLevelButton = screen.getByText("Save level");
  const uploadLevelButton = screen.getByText("Upload level");
  displayButton.onclick = jest.fn();
  saveLevelButton.onclick = jest.fn();
  uploadLevelButton.onclick = jest.fn();
  userEvent.click(displayButton);
  userEvent.click(saveLevelButton);
  userEvent.click(uploadLevelButton);
  expect(displayButton.onclick).toBeCalledTimes(1);
  expect(saveLevelButton.onclick).toBeCalledTimes(1);
  expect(uploadLevelButton.onclick).toBeCalledTimes(1);
});

test("result display correctly when display button is clicked", () => {
  render(<Output />);
  const displayButton = screen.getByText("Display");
  userEvent.click(displayButton);

  const pre = document.querySelector("pre");
  const displayResult = pre?.innerHTML ? JSON.parse(pre.innerHTML) : [];

  const expectedResult = mockAssets.map((x) => ({
    ...x,
    url: x.url.substring(0, 30) + "...",
  }));

  expect(expectedResult).toStrictEqual(displayResult);
});
