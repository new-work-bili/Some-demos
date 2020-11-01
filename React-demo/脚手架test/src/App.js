import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Router, Route, Link, BrowserRouter } from "react-router-dom";
import RouterTest from "./pages/router-test.js";
import Home from "./pages/Home.js";
import Shengmingzhouqi from "./pages/shengmingzhouqi-test.js";
import regTest from "./pages/reg-test.js";
import HookTest from "./pages/hook.js";



function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/test" exact component={RouterTest} />
        <Route path="/shengmingzhouqi" exact component={Shengmingzhouqi} />
        <Route path="/regTest" exact component={regTest} />
        <Route path="/hook" exact component={HookTest} />
      </Switch>
    </div>
  );
}

export default App;
