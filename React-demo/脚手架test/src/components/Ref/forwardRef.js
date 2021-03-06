import React from 'react'
//ref的转发;使用React.forwardRef
 const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref}>
      {props.children}
    </button>
  ));

  const MyComponents = {
    DatePicker: function DatePicker(props) {
      return <div>Imagine a {props.color} datepicker here.</div>;
    }
  }
  
  function BlueDatePicker() {
    const D = MyComponents['DatePicker']
    return <D color="blue" />;
  }
  
export default FancyButton;