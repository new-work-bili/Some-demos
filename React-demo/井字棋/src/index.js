import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// 9个方块，每个方块都有点击事件
//父组件Board
//顶层组件，可以对下方的board组件完全控制，进而展示历史记录，
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          clickZuobiao: 0,
          index: 0,
        },
      ],
      xIsNext: true,
      stepNumber: 0, //表示正在查看那一项历史记录
      zuobiao: "",
      hiddenHistory: null,
      clickButton: "当前升序，点击降序",
      isP: false, //是否平局
      historyIndex: 0,
    };
  }
  //子级点击触发的事件，其实就是子级反馈点击了那个方块i,进而改变父级state中的记号数组squarse
  handleClick(i) {
    let current; //当前的
    let history;
    if(this.state.clickButton === "当前升序，点击降序"){
      history = this.state.history.slice(0, this.state.stepNumber + 1); 
      current = history[history.length - 1];
      
    }else{  //#4反转了history，所以history的取值和当前展示current的取值都要不同处理一下
      history = this.state.history.slice(this.state.history.length - this.state.stepNumber - 1); 
      current = history[0]; 
    }
    const squares = current.squares.slice();
    let historyIndex = ++this.state.historyIndex; //#4为了历史记录的响应顺序是死的；这样就算反转了也不会混乱

    let addHistory =
      this.state.clickButton === "当前升序，点击降序"
        ? history.concat([
            {
              squares: squares,
              zuobiaoIndex: i,
              index: historyIndex,
            },
          ])
        : [
            {
              squares: squares,
              zuobiaoIndex: i,
              index: historyIndex,
            },
          ].concat(history);          //#4
    //以判断获胜或者当前点击的方块已被点击
    if (calculateWinner(squares)[0] || squares[i]) {
      console.log('ttt');
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";


    this.setState(
      {
        xIsNext: !this.state.xIsNext, //每次下棋过后换边
        history: addHistory,
        stepNumber: history.length, //下过棋时，当前的历史记录自然是当前最新的一步棋
        hiddenHistory: null,
      },
      () => {
        //#6:判断是否平局
        const nowHistory = this.state.history.slice(
          0,
          this.state.stepNumber + 1
        );
        const nowCurrent = nowHistory[nowHistory.length - 1];
        const isP = nowCurrent.squares.every((item, index) => {
          return item != null;
        });
        this.setState({
          isP,
        });
      }
    );
  }

  //跳转历史记录
  jumpTo(item, step, desc) {
    console.log('jumpTo:',this.state.history);
    this.setState({
      stepNumber: desc,
      xIsNext: desc % 2 === 0,
      hiddenHistory: item.zuobiaoIndex === undefined ? null : item.zuobiaoIndex, //#2
      historyIndex: desc, //#4:重置
    });
  }

  //#4
  //点击按钮反转history数组
  changeHistory = () => {
    let history = this.state.history.reverse();
    let clickButton =
      this.state.clickButton === "当前降序，点击升序"
        ? "当前升序，点击降序"
        : "当前降序，点击升序";
    this.setState({
      history,
      clickButton,
    },()=>{
      console.log(this.state.history);
    });
  };

  render() {
    //把原先判断胜者，标记都交由顶级组件判断
    //使用最新一次历史记录来确定并展示游戏的状态：
    const history = this.state.history; //就是一个数组，每次点击之后都把当前的9个格子的状态(这个是一个数组，9个方块9个值)push进history
    let current;                        //current放的是当前展示的9格子的状态（有可能是最新点击之后的，也有可能是选择历史记录的）这一切都由step决定(就是步数)；进而去取history里面的值
    if(this.state.clickButton == '当前升序，点击降序'){
      current = history[this.state.stepNumber]; 
    }else{
      //反转了history数组，所以取值要改变
      let index = history.length -1-this.state.stepNumber===0?0:history.length -1-this.state.stepNumber;
      current = history[index];
    }

    const winner = calculateWinner(current.squares)[0];
    const winIndex = calculateWinner(current.squares)[1]; //#5:获胜位置高亮
    //map history，进而循环出历史记录
    const moves = history.map((item, index) => {
      // const desc = index ? "回退至 #" + index : "开始游戏";
      //#4;
      const desc = item.index ? "回退至 #" + item.index : "开始游戏";

      //#1;记录对应坐标到history
      const zuobiaoArr = [
        "(0,0)",
        "(0,1)",
        "(0,2)",
        "(1,0)",
        "(1,1)",
        "(1,2)",
        "(2,0)",
        "(2,2)",
        "(2,2)",
      ];
      const zuobiao = zuobiaoArr[item.zuobiaoIndex];
      return (
        <li key={index}>
          <button onClick={() => this.jumpTo(item, index, item.index)}>
            {desc} {zuobiao}
          </button>
        </li>
      );
    });

    //当前棋手状态，
    let status;
    if (winner) {
      status = "Winner: " + winner;
      //高亮获胜旗子的位置
    }
    if (this.state.isP) {
      status = "平局";
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            hiddenHistory={this.state.hiddenHistory}
            winIndex={winIndex}
            onClick={(i) => {
              //通过i，堆每个方块进行实践绑定
              this.handleClick(i);
            }}
          />
        </div>
        <div className="game-info">
          <div> {status} </div> <ol> {moves} </ol>
        </div>
        {/* 点击对history排序 */}
        <button onClick={this.changeHistory}>{this.state.clickButton}</button>
      </div>
    );
  }
}

//该组件组成9个方块，并绑定点击事件和绑定选中状态（通过props
class Board extends React.Component {
  render() {
    //#3：循环组件
    var itemArr = [];
    for (var i = 0; i < 9; i++) {
      itemArr.push(i);
    }
    var Item = itemArr.map((item, index) => {
      return (
        <Square
          value={this.props.squares[item]} //X/O;向上寻找Board组件的props
          onClick={() => this.props.onClick(item)}
          className={item === this.props.hiddenHistory ? "hiddenHistory" : null}
          winIndex={
            this.props.winIndex && this.props.winIndex.indexOf(item) != -1
              ? "winIndex"
              : null
          }
          key={item}
        />
      );
    });

    return <div className="itemWrapper">{Item}</div>;
  }
}

//Square:设置了border的单个方块
function Square(props) {
  return (
    <button
      className={`square ${props.className} ${props.winIndex}`}
      onClick={props.onClick}
    >
      {/* 点击事件向上找绑定的props */}
      {props.value} {/* 显示X/O;props向上寻找 */}
    </button>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));

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
      return [squares[a], [a, b, c]]; //#5
    }
  }
  return [null];
}
