//比如这个是转么进行计算操作的reducer

const initData = {
    code: 1,
};
const computed = (state = initData, action) => {
    switch (action.type) {
        case "value":
            break;

        default:
            return { ...state };
            break;
    }
};

export default computed;
