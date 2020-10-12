
			class A extends React.Component{
				constructor(props){
					super(props);
					this.state={
						num:0,
						timer:null
					}
				}
				
				componentWillReceiveProps(){
					console.log('componentWillReceiveProps',this.props)
					if(this.props.status ==='点我开始'){
						if(!this.state.timer){
							this.setState({
								timer:setInterval(()=>{//要设置在state
								var num = this.state.num;
								num++;
								this.setState({
									num
								})
							},1000)
							})
						}
					}else{
						
						clearInterval(this.state.timer)
						this.setState({
							timer:null
						})
						console.log('timer',this.state.timer)
					}
					
					
					
					
					
					//或者使用this的形式，只要不是var声明定时器就行
					
					// if(this.props.status ==='点我开始'){
					// 	if(!this.timer){
					// 		this.timer = setInterval(()=>{
					// 			var num = this.state.num;
					// 			num++;
					// 			this.setState({
					// 				num
					// 			})
					// 		},1000)
					// 	}
						
					// }else{
						
					// 	clearInterval(this.timer)
					// 	this.setState({
					// 		timer:null
					// 	})
					// 	console.log('timer',this.timer)
					// }
				}
				
				render(){
					return (
						<h1>增加数字:{this.state.num}</h1>
					)
				}
			}
			
			
			class B extends React.Component{
				constructor(props){
					super(props);
					this.state={
						clickState:'点我开始'
					}
				}
				
				click = ()=>{
					if(this.state.clickState === '点我开始'){
						this.setState({
							clickState:'点我暂停'
						})
					}else{
						this.setState({
							clickState:'点我开始'
						})
					}
				}
				render(){
					console.log(this.Child)
					return (
						<div>
							<A status={this.state.clickState}></A>
							<button onClick={this.click}>{this.state.clickState}</button>
						</div>
						
					)
				}
			}

			ReactDOM.render(
			<div>
				<B></B>
			</div>
        ,
        document.getElementById('root')
      );