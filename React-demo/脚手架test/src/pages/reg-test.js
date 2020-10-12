import React, { PureComponent } from 'react'
import '../assets/style/Home.scss'

export class regTest extends PureComponent {
	constructor(props){
		super(props)
		this.state={
			inputText:'',
			show:'error',
			strong:{//密码强度
				text:'',
				css:''
			},		
		}
	}
	
	inputChange = (e)=>{
		let value = e.target.value
		this.setState({
			inputText:value
		})
		//正则
		//简单密码:即正确：数字字母_.
		let reg = /^[\w\_\.]{6,16}$/;	
		
		
		//注意下面这些先行断言的无法统计整个数量；所以40行要先判断基础
		//下面每个括号里的.*都很重要
		//中等,数字+字母(大写或小写)；或者带一个特殊的正则先行断言
		let regMedium = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Za-z]{1,})(?=.*[\.\_]*).*$/;
		//安全必须数字+字母大+祖母小+特殊字符
		let regHot =/^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[\.\_]).*$/;
		
		//判断
		let easy = reg.test(value);
		let Medium = regMedium.test(value);
		let Hot = regHot.test(value);
		if(easy){//判断正确
			if(Hot){
				this.setState({
					strong:{
						text:'安全',
						css:'Hot'
					},
					show:'strong'
				})
			}else if(Medium){
				this.setState({
					strong:{
						text:'中等',
						css:'Medium'
					},
					show:'strong'
				})
			}else if(easy){
				this.setState({
					strong:{
						text:'简单',
						css:'easy'
					},
					show:'strong'
				})
			}
		}
		else{
			this.setState({
				show:'error'
			})
		}
		
	}
	
	
	render() {
		//v-show、v-if
		let Showspan = (props)=>{
			if(this.state.show == 'error'){
				return	<span className="error_span">格式错误</span>
			}else{
				console.log('???')
				return	<span>代码强度:<span className={this.state.strong.css}>{this.state.strong.text}</span></span>
			}
		}
		return (
			<div>
				<div className="regWrapper_div">
					<input type="password" value={this.state.inputText} onChange={this.inputChange}></input>
					<Showspan/>
				</div>
			</div>
		)
	}
}

export default regTest
