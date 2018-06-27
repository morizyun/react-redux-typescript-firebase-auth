import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "../../store";
import { Home } from "./index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Home />
      </HashRouter>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
