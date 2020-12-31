import React, { PureComponent } from 'react'

export default class reduxTest extends PureComponent {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>这里是React-redux测试</h1>
                <p>当更改store时，因为react-redux的哪两个函数会监听的关系，所以这里的数值会跟着改变：<span style={{fontWeight:600,fontSize:'1.5rem'}}> {this.props.num}</span></p>
                <button onClick={this.props.mapAdd}>点击我触发mapDispatchToProps中的mapAdd(也就是映射store中的ADD</button>
            </div>
        )
    }
}
