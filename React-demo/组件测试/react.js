function PhotoStory(){
	return <h1>PhotoStory</h1>
}

function VideoStory(){
	return <h1>VideoStory</h1>
}


class A extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value:0
		}
	}
	componentDidMount(){
		this.setState({value:this.state.value+1})
		console.log(this.state.value);//0;未更新
		this.setState({value:this.state.value++},()=>{
			console.log('callBack',this.state.value);//0;最终结果，
		})
		// this.state.value++;
		console.log(this.state.value);//1??

		setTimeout(()=>{
			console.log('setTimeout:',this.state.value);//0
		},0)
		
	}
	render() {
		return ( 
			<h1>testA</h1>
		)
	}
}




const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}


ReactDOM.render( 
	<div >
		<A > </A> 
		<Story storyType="photo"></Story>
		<h1>what is {'undefined'}</h1>
	</div > ,
	document.getElementById('root')
);
