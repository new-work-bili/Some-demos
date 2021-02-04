import React, { PureComponent } from "react";
import { testContext } from "./Context/context";

class DeepChild extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static fun() {
        console.log("static中的this,获取实例属性：", this.classThisTest); //undefined；获取不到实例上的属性
        console.log("static中的this,获取静态方法：", this.funs); //funs(){...};获取到的是static的静态属性
    }
    static funs() {
        console.log(this.classThisTest);
    }
    static contextType = testContext; //向上找到最近的Provider中的value;注意：contexType是固定的
    render() {
        return (
            <h3>
                这是deepChild组件获取的Context: {this.context}
                <button
                    onClick={() => {
                        this.classThisTest = "thisIS";
                        console.log(
                            "普通函数中的this,实例的this,获取实例属性：",
                            this.classThisTest
                        ); //funs(){...};
                        console.log(
                            "普通函数中的this,实例的this,获取静态方法：",
                            this.funs
                        ); //undefined
                        DeepChild.fun();
                    }}
                >
                    点击测试class的this
                </button>
            </h3>
        ); //使用
    }
}
// DeepChild.contextType = testContext;//或者这样

export default class child extends PureComponent {
    constructor(props) {
        super(props); //继承，比如父子通讯时的props
        this.state = {
            data: "状态遍历仓库state",
        };
    }

    send = () => {
        this.props.sendFunc("sendMasg");
    };
    fetchSend = () => {
        const url = "http://localhost:3001/login/";
        const data = { data: "测试JSON数据" };
        fetch(url, {
            method: "POST",
            headers: {
                // "Content-type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                const data = res.json();
                console.log(data, res);
                return data;
            })
            .then((res) => {
                console.log(res);
            });
    };
    componentDidMount() {}
    render() {
        const hello = "hello word";

        return (
            <div>
                <h1 className="child">
                    我是child,传值的name是:{this.props.name}
                </h1>
                <a onClick={this.send}>点击我向父组件传值</a>

                {/* 可以有多个testContext.Provider，deepChild会匹配最近的Provider中的value */}
                <testContext.Provider value="最近的Provider中的value">
                    <DeepChild />
                </testContext.Provider>

                {/* Consumer就相当于一个deepChild，只不过特殊的结构能让他使用value。但让同样是匹配最近的Provider中的value */}
                <testContext.Consumer>
                    {(value) => <p>这个是Consumer的测试：{value}</p>}
                </testContext.Consumer>
                <p style={{ backgroundColor: "green" }}>
                    <button onClick={this.fetchSend}>点击发送fetch</button>
                </p>
            </div>
        );
    }
}
