import React from 'react'
//ref的转发;使用React.forwardRef
 const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref}>
      {props.children}
    </button>
  ));
  
export default FancyButton;