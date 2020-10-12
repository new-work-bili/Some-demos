import React, { PureComponent } from 'react'

export default class shengmingzhouqi_test extends PureComponent {
	// constructor()中完成了React数据的初始化，它接受两个参数：props和context，当想在函数内部使用这两个参数时，需使用super()传入这两个参数。
	// 注意：只要使用了constructor()就必须写super(),否则会导致this指向错误。
	//在 React 组件挂载之前，会调用它的构造函数
	 static defaultProps = {
		 name:'name'
	 } 
	constructor(){
		super();
		this.state = {
			name:'lpp',
			age:'man'
		}
		console.log('constructor')
	}
	//组件第一次渲染完成，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
	componentDidMount(){
		console.log('componentDidMount')
	}
	
	//卸载
	//当组件从 DOM 中移除时会调用如下方法
	//跳转至其他路由时也会触发
	componentWillUnmount(){
		console.log('componentWillUnmount')
	}
	
	
	//更新过程
	//
	componentWillReceiveProps(nextProps){
		console.log('componentWillReceiveProps')
	}
	//***区别与VUE;根据其return true\fals确定了组件是否随着 state 或 props而更新组件
	//当 props 或 state 发生变化时，shouldComponentUpdate() 会在渲染执行之前被调用。返回值默认为 true。默认行为是 state 每次发生变化组件都会重新渲染。大首次渲染或使用 forceUpdate() 时不会调用该方法。
	//https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate
	//注意继承自PureComponent组件不能使用它
	// shouldComponentUpdate(nextProps, nextState){
		
	// }
	
	
	
	
	
	
	jieshou = (data)=>{
		console.log('在父组件打印子组件传来的数据：',data)
	}
	render() {
		return (
			<div>
				<h1>此组件测试生命周期.????</h1>
			</div>
		)
	}
}

