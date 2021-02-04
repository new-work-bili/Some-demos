import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/index"; //引入合并的reducer
import thunk from "redux-thunk";

//存放中间件
const middlewares = [thunk];
export default createStore(reducer, applyMiddleware(...middlewares));
