import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/style/reset.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { HashRouter, BrowserRouter } from "react-router-dom"; //对应hash history路由模式
import { Provider, connect } from "react-redux";//react-redux
import store from './Redux' //redux

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

//需要经过connect包装
const App = connect()(App)
//  <React.StrictMode>严格模式
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
