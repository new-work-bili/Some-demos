import React, { PureComponent } from "react";
import { testContext } from "./Context/context";

class DeepChild extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static contextType = testContext; //向上找到最近的Provider中的value;注意：contexType是固定的
    render() {
        return <h3>这是deepChild组件获取的Context: {this.context} </h3>; //使用
    }
}
// DeepChild.contextType = testContext;//或者这样


export default class child extends PureComponent {
    constructor(props) {
        super(props); //继承，比如父子通讯时的props
        this.state = {
            //data
            data: "状态遍历仓库state",
        };

    }
    send = () => {
        this.props.sendFunc("sendMasg");
    };
    componentDidMount(){
    }
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
                <br/><br/>
            </div>

        );
    }
}
