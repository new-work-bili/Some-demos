//此组件试使用了react-redux配合-----一般也是这种情况
import React, { PureComponent } from 'react'
import { mapStateToProps, mapDispatchToProps } from "../redux/react-redux";
import {  connect } from "react-redux"; //react-redux

 class reduxTest extends PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>这里是React-redux测试</h1>
                <p>当更改store时，因为react-redux的哪两个函数会监听的关系，所以这里的数值会跟着改变：<span style={{fontWeight:600,fontSize:'1.5rem'}}> {this.props.num}</span></p>
                <p>other: {this.props.other}</p>
                <button onClick={this.props.mapAdd}>点击我触发mapDispatchToProps中的mapAdd(也就是映射store中的ADD</button>
            </div>
        )
    }
}



//使用react-redux的话需要经过connect包装
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(reduxTest);