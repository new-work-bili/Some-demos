//此组件测试，纯使用redux仓库和相关API

import React, { PureComponent } from "react";
// import store from "../redux/reduxStore";
import store from "../reducer/index"; //拆分合并之后的redux
import { connect } from "react-redux"; //react-redux
import { bindActionCreators } from "redux";

// bindActionCreators测试;该组件没有connect包装，但使用了bindActionCreators之后一样能dispatch
class NullConnect extends PureComponent {
    clicks = () => {
        this.props.addTodo(1)
    };
    render() {
        return (
            <div style={{ backgroundColor: "red" }}>
                <p>本组件没有用Connect包装，bindActionCreators测：</p>
                <button onClick={this.clicks}>点我触发dispacth</button>
            </div>
        );
    }
}

class reduxTest extends PureComponent {
    constructor() {
        super();
        this.state = {
            storeNum: store.getState().num,
        };
    }

    bindAFunc = () => {
        const action = {
            addTodo: (text) => {
                return {
                    type: "ADD",
                    text,
                };
            },
            removeTodo: (id) => {
                return {
                    type: "SUB",
                    id,
                };
            },
        };
        //bindActionCreators
        return bindActionCreators(action, store.dispatch);
    };
    render() {
        //subscribe监听store的变化，在回调函数函数中赋值
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({
                storeNum: store.getState().num,
            });
        });

        const bindA = this.bindAFunc();
        console.log(bindA);
        return (
            <div>
                <div>
                    <h1>这里是Redux测试</h1>
                    <p>
                        而只使用redux的话，改变store是不会发生改变的：
                        <span style={{ fontWeight: 600, fontSize: "1.5rem" }}>
                            {this.state.storeNum}
                        </span>
                    </p>
                    <span>{this.state.storeOther}</span>
                    <button
                        onClick={() => {
                            store.dispatch({ type: "ADD", other: "dddd" });
                        }}
                    >
                        点击我触发store.dispatch,改变store
                    </button>
                </div>

                {/* bindActionCreators测试 */}
                <NullConnect {...bindA}></NullConnect>
            </div>
        );
    }
}

export default reduxTest;
