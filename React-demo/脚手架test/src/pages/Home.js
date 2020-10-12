import {Link} from 'react-router-dom';
import React, { PureComponent } from 'react'
import Child from './child.js'
import '../assets/style/Home.scss'

export default class home extends PureComponent {
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
		// console.log('constructor')
	}
	
	jieshou = (data)=>{
		console.log('在父组件打印子组件传来的数据：',data)
	}
	render() {
		return (
			<div>
				<h1>This is Home.</h1>
				<div className="router">
					<Link to="/test" className="jump">跳转至test组件</Link>
					<Link to="/shengmingzhouqi" className="jump">跳转至生命周期测试组件</Link>
					<Link to="/DanmuRoom/entrance_room" className="jump">扫描的二维码和显示的弹幕</Link>
					<Link to="/DanmuRoom/userSend" className="jump">跳转页面,用户发送弹幕的页面</Link>
					<Link to="/regTest" className="jump">正则匹配代码强度</Link>
				</div>
				
				<Child name={this.state.name} sendFunc={this.jieshou}></Child>
			</div>
		)
	}
}




 