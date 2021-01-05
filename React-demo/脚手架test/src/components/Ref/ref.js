import React, { PureComponent } from "react";
import FancyButton from './forwardRef'

//ref控制自定义组件，不能是函数组件(因为没有实例)
class ComponentRef extends PureComponent {
    render() {
        return (
            <div>
                <h2>组件Ref的获取</h2>
            </div>
        );
    }
}

export default class ref extends PureComponent {
    constructor(props) {
        super(props);
        this.DomRef = React.createRef();
        this.ComponRef = React.createRef();
        //转发ref
        this.forwardRef = React.createRef()
    }
    componentDidMount(){
        //可以获取到
        console.log('componentDidMount,DomRef:',this.DomRef);
        console.log('componentDidMount,ComponRef:',this.ComponRef);
        //通过ref转发，获取子级绑定的ref
        console.log('componentDidMount,forwardRef:',this.forwardRef);

        // ref操作Dom
        this.DomRef.current.focus()
    }
    render() {
        //render获取不到，是null，因为dom还没有完全渲染并挂载
        console.log('render,DomRef:',this.DomRef);
        console.log('render,ComponRef:',this.ComponRef);
        return (
            <div>
                <h1>--Ref测试--</h1>
                <input type="text" defaultValue="自动聚焦" name="" id="" ref={this.DomRef} />
                <ComponentRef ref={this.ComponRef}></ComponentRef>
                <FancyButton ref={this.forwardRef}>
                    <span>ref转发测试</span>
                </FancyButton>
            </div>
        );
    }
}
