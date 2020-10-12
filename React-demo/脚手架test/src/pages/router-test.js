import React, { PureComponent } from 'react';

export default class test extends PureComponent{
  constructor() {
    super();
    this.state = {
      isShow: false,
	  thisArr:[0]
    };
    console.log('constructor');
  }
  changeState = () => {//注意这里用的是箭头函数，为的是让this的指向仍然是该组件
	  //测试PureComponent的浅比较，可以看到每次点击都会让thisArr中的数字++；但是并不会打印'render'；
	var arr = this.state.thisArr;
	  arr[0]++;
	this.setState({
      isShow: true,
	  thisArr:arr
    })
	// this.
  };
  render() {
    console.log('render');
    return (
      <div>
		<h1>This is Test.</h1>
        <button onClick={this.changeState}>点击</button>
        <div>{this.state.isShow.toString()}</div>
		<div>{this.state.thisArr}</div>
      </div>
    );
  }
}