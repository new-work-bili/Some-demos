import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 9个方块，每个方块都有点击事件
//父组件Board


//顶层组件，可以对下方的board组件完全控制，进而展示历史记录，
class Game extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			history: [{
				squares: Array(9).fill(null)
			}],
			xIsNext: true,
			stepNumber: 0 //表示正在查看那一项历史记录
		}
	}
	//子级点击触发的事件，其实就是子级反馈点击了那个方块i,进而改变父级state中的记号数组squarse
	handleClick(i) {
		//此处为了是跳转之前的历史之后再进行下棋，那么之前未来下的棋就不算了
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares) || squares[i]) { //以判断获胜或者当前点击的方块已被点击
			return;
		}
		squares[i] = this.state.xIsNext ? 'X' : 'O';

		this.setState({
			xIsNext: !this.state.xIsNext, //每次下棋过后换边
			history: history.concat([{
				squares: squares
			}]),
			stepNumber: history.length, //下过棋时，当前的历史记录自然是当前最新的一步棋
		});

	}

	//跳转历史记录
	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0,
		});
	}
	render() {
		//把原先判断胜者，标记都交由顶级组件判断
		//使用最新一次历史记录来确定并展示游戏的状态：
		const history = this.state.history
		const current = history[this.state.stepNumber] //最后一步
		const winner = calculateWinner(current.squares);

		//map循环出历史记录
		const moves = history.map((step, move) => {
			const desc = move ?
				'回退至 #' + move :
				'开始游戏';
			return ( <
				li key = {
					move
				} >
				<
				button onClick = {
					() => this.jumpTo(move)
				} > {
					desc
				} < /button> <
				/li>
			);
		});

		//当前棋手状态，
		let status;
		if (winner) {
			status = 'Winner: ' + winner;
		} else {
			status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
		}


		return ( <
			div className = "game" >
			<
			div className = "game-board" >
			<
			Board squares = {
				current.squares
			}
			onClick = {
				(i) => {
					this.handleClick(i)
				}
			}
			/> <
			/div> <
			div className = "game-info" >
			<
			div > {
				status
			} < /div> <
			ol > {
				moves
			} < /ol> <
			/div> <
			/div>
		);
	}
}

//渲染方块，父级
class Board extends React.Component {


	renderSquare(i) {
		return ( <
			Square value = {
				this.props.squares[i]
			}
			onClick = {
				() => this.props.onClick(i)
			} //设置监听函数
			/>		
		)
	}

	render() {
		return ( <
			div >
			<
			div className = "board-row" > {
				this.renderSquare(0)
			} {
				this.renderSquare(1)
			} {
				this.renderSquare(2)
			} <
			/div> <
			div className = "board-row" > {
				this.renderSquare(3)
			} {
				this.renderSquare(4)
			} {
				this.renderSquare(5)
			} <
			/div> <
			div className = "board-row" > {
				this.renderSquare(6)
			} {
				this.renderSquare(7)
			} {
				this.renderSquare(8)
			} <
			/div> <
			/div>
		);
	}
}


// 渲染点击按钮,子级
// class Square extends React.Component {
// 	constructor(props){	//react的状态管理,
// 		super(props);
// 		this.state={
// 			value:null,
// 		}
// 	}
//   render() {
//     return (	//setState相当于vuex吧...
//       <button className="square" onClick={()=>{this.props.onClick({value:'X'});console.log(this.props.value)} }>	
//         {this.props.value}
//       </button>		//this.props接收父级传来的参数
//     );
//   }
// }

//把Square组件简化成函数
function Square(props) {
	return ( <
		button className = "square"
		onClick = {
			props.onClick
		} > {
			props.value
		} <
		/button>

	)
}



// ========================================




ReactDOM.render( <
	Game / > ,
	document.getElementById('root')
);

//判断胜出
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
}
