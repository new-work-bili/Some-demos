import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch,Router,Route,Link,BrowserRouter} from 'react-router-dom';
import RouterTest from './pages/router-test.js'
import Home from './pages/Home.js'
import Shengmingzhouqi from './pages/shengmingzhouqi-test.js'
import entrance_room from './pages/DanmuRoom/entrance_room.js'	////扫描的二维码；发的弹幕都在这里显示
import userSend from './pages/DanmuRoom/userSend.js'		//用户扫码之后会跳转至这里，进行发送弹幕
import regTest from './pages/reg-test.js'


function App() {
  return (
    <div className="App">
		  <Switch>
			<Route path='/' exact component={Home}></Route>
			<Route path='/test' exact component={RouterTest} />
			<Route path='/shengmingzhouqi' exact  component={Shengmingzhouqi} />
			<Route path='/DanmuRoom/entrance_room' exact  component={entrance_room} />
			<Route path='/DanmuRoom/userSend' exact  component={userSend} />
			<Route path='/regTest' exact  component={regTest} />
		  </Switch>
    </div>
  );
}

export default App;
