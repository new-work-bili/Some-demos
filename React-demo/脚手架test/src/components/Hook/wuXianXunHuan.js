import React, { useState, useEffect } from "react";


export default function useDeep(){
    const [count, setCount] = useState(0);
    //useEffect无限循环：
    //初渲染时完成时调用useEffect，改变count状态，状态发生改变，触发重渲染
    //冲渲染完成时，再次调用useEffect，再次改变count状态(因为是count+1)，状态发生改变，再次触发重渲染，----依次循环
    useEffect(() => {
      setTimeout(() => setCount(count + 1), 1000);
    // setCount(count + 1)
    });
  
    return (
      <div className="App">
        <h1>{count}</h1>
      </div>
    );
  
}