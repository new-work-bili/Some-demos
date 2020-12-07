import React, { memo, useState, useEffect,PureComponent,Component } from 'react'


const Child = props => {
    console.log(props.fixed);
    return <div>1111111</div>;
  };
  
  const ChildC = memo(Child);
  const Parent = () => {
      const [count, setCount] = useState(0);
  
    const [fixed, setFixed] = useState(0);
    console.log('render');
    return (
      <>
        <button
          onClick={() => {
            setCount(1)
            console.log(count,fixed);
          }}
        >
          增加
        </button>
        <p>count:{count.c}</p>
        <ChildC fixed={ fixed } />
      </>
    );
  };
  
  
  
  export default Parent;