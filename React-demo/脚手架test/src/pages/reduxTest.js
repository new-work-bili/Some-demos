import React, { PureComponent } from "react";
import store from "../redux/reduxStore";

 class reduxTest extends PureComponent {
  constructor(){
    super();
    this.state={
      storeNum:store.getState().num,
      storeOther:store.getState().other

    }
  }
  render() {
    //subscribe监听store的变化，在回调函数函数中赋值
    // store.subscribe(()=>{
    //   console.log(store.getState());
    //   this.setState({
    //     storeNum:store.getState().num
    //   })
    // })
    return (
      <div>
        <h1>这里是Redux测试</h1>
        <p>而只使用redux的话，改变store是不会发生改变的：
          <span style={{fontWeight:600,fontSize:'1.5rem'}}>{store.getState().num}</span>
        </p>
        <span>{this.state.storeOther}</span>
        <button onClick={()=>{store.dispatch({ type: "ADD", other: "dddd" })}}>
          点击我触发store.dispatch,改变store
        </button>
      </div>
    );
  }
}

export default reduxTest