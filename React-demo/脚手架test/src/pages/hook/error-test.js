import React, { useState, useEffect } from "react";

// 错误规则：
let firstRender = true;

export default function RenderFunctionComponent() {
  let initName;
  
  //条件语句下面，不是最顶层调用
  if(firstRender){
    [initName] = useState("Rudi");
    firstRender = false;
  }
  const [firstName, setFirstName] = useState(initName);
  const [lastName, setLastName] = useState("Yardley");

  return (
    <button onClick={() => setFirstName("Fred")}>Fred</button>
  );
}
