import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/style/reset.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, BrowserRouter } from "react-router-dom"; //对应hash history路由模式

import {Provider}  from "react-redux"; //react-redux
// import store from "./redux/reduxStore";  //redux
import store from "./reducer/index";        //拆分合并之后的redux
import './http/mock/mock.js'

//  <React.StrictMode>严格模式
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
