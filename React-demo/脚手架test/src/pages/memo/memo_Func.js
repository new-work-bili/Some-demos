import React, { memo, PureComponent,Component } from 'react'


//不使用的情况，每次改变count的值(就算改变的知识一样的，也会重复渲染)
const TestC = (props) => {
    console.log(` TestC render :` ,props)
    return ( 
        <div>
            {props.count}
        </div>
    )
}

//类似 shouldComponentUpdate中的逻辑，不过与他相反：
//结果一致则 也就是不需要渲染 返回true， 否则返回 false
const compute = (prevProps, nextProps)=>{
    console.log(prevProps, nextProps);
}
const MemoT = React.memo(TestC,compute)


//在父级中传入props
//当然，如果父组件是PureComponent,他在检测到count没有变化的时候也不会重新渲染
class Test extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:6,
        }
    }
    add=()=>{
        this.setState({
            count:45,
        })
        }
    render() {
        console.log(555);
        return (
            <div>
                <MemoT count={this.state.count}></MemoT>
                {/* <TestC count={this.state.count}></TestC> */}
                <button onClick={this.add}>++</button>
            </div>
        )
    }
}
export default Test;