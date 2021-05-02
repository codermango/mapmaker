import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { store } from "./app/store";

export const renderWithRedux = (component: ReactElement) => {
  return render(<Provider store={store}>{component}</Provider>);
};

export const renderWithDnd = (component: ReactElement) => {
  return render(<DndProvider backend={HTML5Backend}>{component}</DndProvider>);
};

export const renderWithReduxAndDnd = (component: ReactElement) => {
  return render(
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>{component}</DndProvider>
    </Provider>
  );
};
