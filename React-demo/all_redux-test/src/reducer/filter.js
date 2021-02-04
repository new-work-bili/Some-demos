//比如这个是转么进行筛选操作的reducer;比如删选日期
//这里拆分的reducer操作的都是自己的store，最终返回之后会被合并到总的store，key就是引入时的名字，比如这里是filter
//所以注意格式
const initData = []; //筛选结果
const fliter = (state = initData, action) => {
    switch (action.type) {
        case "FLITER":
            //伪代码
            if (action.date > "**-**-") {
                //....
            }
            return [...state];
            break;
        default:
            return [...state];
            break;
    }
};

export default fliter;
