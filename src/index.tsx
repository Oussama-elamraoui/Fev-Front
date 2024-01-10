import React from "react";
import ReactDOM from "react-dom/client";
import 'resize-observer-polyfill/dist/ResizeObserver.global';

import "./i18n";

import App from "./App";

import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import './style.css'
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Provider store={configureStore({})}>
    <React.Fragment>
      
        <App />
      
    </React.Fragment>
  </Provider>
);
