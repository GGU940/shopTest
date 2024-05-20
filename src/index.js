import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/my_reset.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 이 하위에선 store 정보 접근 가능 */}
      <BrowserRouter>
        {/* 이 하위에선 browserRouter 적용 가능 */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
