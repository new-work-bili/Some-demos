import { Link } from "react-router-dom";
import React, { PureComponent } from "react";
import Child from "../components/child.js";
import "../assets/style/Home.scss";
import { testContext } from "../components/Context/context";
import ReduxTest from "./reduxTest";
import reactReduxTest from "./react-reduxTest";

import { Provider, connect } from "react-redux"; //react-redux
import store from "../redux/reduxStore"; //redux
import { mapStateToProps, mapDispatchToProps } from "../redux/react-redux";


//使用react-redux的话需要经过connect包装
const ReactReduxTest = connect(
    mapStateToProps,
    mapDispatchToProps
)(reactReduxTest);


const styles={
  button:{
    color:'red'
  }
}

export default class home extends PureComponent {
    // constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
    // 注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。
    //在 React 组件挂载之前，会调用它的构造函数
    static defaultProps = {
        name: "name",
    };
    constructor(props) {
        super(props);
        this.state = {
            name: "lpp",
            age: "man",
            providerValue: "DefaultValue",
        };
    }
    componentDidMount() {
        console.log("homeProps", this.props);
    }
    jieshou = (data) => {
        console.log("在父组件打印子组件传来的数据：", data);
    };
    render() {
        return (
            <div>
                <h1>This is Home.</h1>
                <div className="router">
                    <Link to="/test" className="jump">
                        跳转至test组件
                    </Link>
                    <Link to="/shengmingzhouqi" className="jump">
                        跳转至生命周期测试组件
                    </Link>
                    <Link to="/DanmuRoom/entrance_room" className="jump">
                        扫描的二维码和显示的弹幕
                    </Link>
                    <Link to="/DanmuRoom/userSend" className="jump">
                        跳转页面,用户发送弹幕的页面
                    </Link>
                    <Link to="/regTest" className="jump">
                        正则匹配代码强度
                    </Link>
                    <Link to="/hook" className="jump">
                        Hook-Test
                    </Link>
                    <Link to="/cookie/login" className="jump">
                        测试Cookie登陆
                    </Link>
                    <Link to="memo" className="jump">
                        memo
                    </Link>
                    <Link to="context" className="jump">
                    context
                    </Link>
                    <button style={styles.button}>styleTest</button>
                </div>
                <hr></hr>
                <p>
                    我是父级，
                    <button
                        onClick={() => {
                            this.setState({
                                providerValue: this.state.providerValue + 1,
                            });
                        }}
                    >
                        点我更改context
                    </button>
                </p>
                {/* 设置context，深度传递参数的时候，子组件不用层层传递 */}
                <testContext.Provider value={this.state.providerValue}>
                    <Child
                        name={this.state.name}
                        sendFunc={this.jieshou}
                    ></Child>
                </testContext.Provider>
                <hr></hr>
                <ReduxTest></ReduxTest>
                <hr></hr>
                <ReactReduxTest></ReactReduxTest>
                <hr></hr>
            </div>
        );
    }
}
