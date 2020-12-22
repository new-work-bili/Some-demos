
import {useReducer} from 'react'

function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1 };
      default:
        throw new Error();
    }
  }
  
  function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </>
    );
  }