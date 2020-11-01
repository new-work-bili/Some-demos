import React, { PureComponent } from "react";
import store from "../redux/reduxStore";

export default class reduxTest extends PureComponent {
  render() {
    // console.log(store.dispatch({ type: "ADD", other: "dddd" }));
    //获取store
    let getStore = store.getState();
    console.log(store.getState());

    return (
      <div>
        <h1>这里是Redux测试</h1>
        <p>而只使用redux的话，改变store是不会发生改变的：{store.getState().num}</p>
        <button onClick={()=>{store.dispatch({ type: "ADD", other: "dddd" })}}>
          点击我触发store.dispatch,改变store
        </button>
      </div>
    );
  }
}
