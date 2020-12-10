import React, { useState, useEffect } from "react";

function Test(props) {
    const [init, setInit] = useState("inits"); //变量和设置变量
    const [other, setOther] = useState("other");
    const [other2, setOther2] = useState("other3");
    let is = true;
    //在每轮渲染之后执行
    //相当于componentDidUpdate和componentDidMount
    useEffect(() => {
        //变化时调用
        console.log(init, other, other2);

        return ()=>{
            //return的这个函数会在组件注销时调用，相当于componentWillUnmount
            console.log('return Func');
        }

        //如果配置了依赖项，也就是useEffect的第二个参数，那么useEffect只会在useEffect改变时才会重新执行
    },[init]);  

    console.log('hook:',props.location.search,props.location.state);
    const fn = () => {
        setOther(other + 2);
        setInit(init + 1);
        is = !is;
    };
    return (
        <div>
            <button onClick={fn}>Click</button>
            <p>
                <span>init:</span> {init}
            </p>
        </div>
    );
}

export default Test;
