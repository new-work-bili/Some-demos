// import React from 'react';
// import PhotoStory from './other.js';
// require('./other.js')
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

		}
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
