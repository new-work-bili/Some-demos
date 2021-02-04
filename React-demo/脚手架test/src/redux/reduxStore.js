import { createStore } from "redux";

//reducer是一个函数，  使用的时候把它传入store 的createStore
//他其实就是初始化了state，和规定什么样的action去如何控制state里的值
const reducer = (state, action) => {
    switch (action.type) {
        //注意reducer不会像setState一样自动合并，所以要用结构对象来手动合并
        case "ADD":
            return { ...state, num: state.num + 1 };
            break;
        case "SUB":
            return { ...state, num: state.num - 1 };
        default:
            return state;
            break;
            
    }
};

const store = createStore(reducer, { num: 1, other: "other" }); //第二个参数是state的初始化数据

//action是个对象，维护操纵字符,一般会独立一个专门的文件来声明action，然后导出；就想：https://juejin.cn/post/6844904021187117069#heading-19
//当然也可以不用写，到时候调用的时候自己再手写对象就行，就想第27行那样
// const action = {

// }

//dispath,调用更改state的值
store.dispatch({
    type: "ADD",
    other:
        "随便，的哥type就是为了在reducer里能匹配对应的处理，剩下的属性就随便，可能就会说方便处理数值把",
});

export default store;
