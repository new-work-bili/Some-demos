
# 在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。
在每次点击的时候会有对应点击的i;换算出对应的坐标；然后放进history里面
```
    this.setState({
      history: history.concat([//顺便，对于state里面数组的更新可以这样
        {
          squares: squares,
          zuobiaoIndex:zuobiaoArr[i]
        },
      ]),
    });
```


# 在历史记录列表中加粗显示当前选择的项目。
点击历史按钮，在JumpTo事件中得到对应点击的i；
然后把这个i的值通过props传给子组件；9个方块组件通过判断是否是对应的那个i，进而动态改变calssName的值
最后设置click表格的时候加强要消失，就是把那个i值归零
className={i===this.props.hiddenHistory?'hiddenHistory':null}//判断是不是和i一样
##  坑点：
1.  动态添加多个calssName
        <button className={`square ${props.className}`} onClick={props.onClick}>
2.  自定义组件绑定calssName和事件无效
        但可以通过先绑定在自定义组件上，再在组件里面通过props接收判断



#  使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。
循环组件和Key.note
## 坑点：
1. 在class组件内，不能var let const声明变量；也不能用function声明函数；而是要直接书写(这其实就是class的语法）
2. 循环组件不是函数




# 添加一个可以升序或降序显示历史记录的按钮。
最麻烦的一个，改的东西巨多
本质是更改history数组；
但有一个遗留问题，就是遍历历史记录第几部的是map(item,inde)直接去index的值，这样的话就算反转了index还是顺序的没有改变，
所以声明一个记录步数的变量；每次点击++；回退之后重置
1. 其实主要改动就是history数组的反转；和相关一系列事件：跳转历史记录时的步数记录、点击时的时候对反转判断同时做不同处理
2. 如果有点击之后不显示编辑，估计是点击事件中的history或者current的取值错了


# 每当有人获胜时，高亮显示连成一线的 3 颗棋子。
# 当无人获胜时，显示一个平局的消息。
## 坑点：
1. setState不是同步的，需要在回调中使用更新之后的参数












