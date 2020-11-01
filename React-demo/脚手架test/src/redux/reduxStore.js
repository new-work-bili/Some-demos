import { createStore } from 'redux';


//reducer是一个函数，  使用的时候把它传入store 的createStore
//他其实就是初始化了state，和规定什么样的action去如何控制state里的值
const reducer = (state={num:1},action)=>{
    switch (action.type) {
        case 'ADD':return{num:state.num+1}
            break;
        case 'SUB':return {num:state.num-1}
        default:return state
            break;
    }
}

const store = createStore(reducer);

//action是个对象，维护操纵字符,其实可以不用写，到时候调用的时候自己写就行
// const action = {
    
// }


//dispath,调用更改state的值
store.dispatch({type:'ADD',other:'随便，的哥type就是为了在reducer里能匹配对应的处理，剩下的属性就随便，可能就会说方便处理数值把'})


export default store;