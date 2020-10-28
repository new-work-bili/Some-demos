import React, { useState, useEffect } from "react";

function Test() {
  const [init, setInit] = useState("inits"); //变量和设置变量
  const [other, setOther] = useState("other");
  const [other2, setOther2] = useState("other3");
  let is = true;
  useEffect(() => {
    //变化时调用
    console.log(init, other,other2);
  });
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
