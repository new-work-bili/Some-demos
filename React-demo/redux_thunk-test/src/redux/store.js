import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

var initData = {
    num: 0,
};
const reducer = (state = initData, action) => {
    switch (action.type) {
        case "ADD":
            return { ...state, num: state.num + 1 };
            break;
        case "GET_SUCCESS":
            return { ...state, num: state.num + 10 };
            break;
        default:
            return state;
            break;
    }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
