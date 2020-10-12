
			class A extends React.Component{
				constructor(props){
					super(props);
					this.state={
						num:0,
						timer:null
					}
				}
				 
				componentDidMount(){
					this.props.getChild(this)
				}
				//被调用的方法
				ChildFunc(){
					console.log('test-->ChildFunc')
				}
				
				componentWillReceiveProps(){}
				
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
				//获取子级方法
				getChild = (ref)=>{
					this.Child = ref;
					console.log(this.Child)
				}
				
				
				componentDidMount(){
					console.log(this.Child)
					
				}
				render(){
					return (
						<div>
							<A status={this.state.clickState} getChild={this.getChild}></A>
							<button>{this.state.clickState}</button>
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