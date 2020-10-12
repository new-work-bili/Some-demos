import React, { PureComponent } from 'react'

export default class child extends PureComponent {
	constructor(props){
		super(props);//继承，比如父子通讯时的props
		this.state = {//data
		  data: '状态遍历仓库state',
		};
	}
	send = ()=>{
		this.props.sendFunc('sendMasg')
	}
	render() {
		     const hello = 'hello word'
		return (
			<div>
				<h1 className="child">我是child,传值的name是:{this.props.name}</h1>
				<a onClick={this.send}>点击我向父组件传值</a>
			</div>
		)
	}
}
