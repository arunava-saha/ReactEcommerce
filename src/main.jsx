import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { generateRandomUserId } from "./assets/utils";
import { Provider } from "react-redux";
import { store } from "./store/store";

const userID = generateRandomUserId();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
