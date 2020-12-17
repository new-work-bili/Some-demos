import React, {
    memo,
    useState,
    useEffect,
    PureComponent,
    Component,
    useMemo,
} from "react";

//Memo
//比如这里第31行，如果我们传入的值被对象包裹，那么因为hook浅比较的原因父级和子级每次都会重新渲染
const Child = (props) => {
    console.log(props.msg, props.fixed);
    return <div>{props.msg}</div>;
};

const ChildC = React.memo(Child);

const Parent = () => {
    const [count, setCount] = useState(0);
    const [fixed, setFixed] = useState(0);
    const [obj, setObj] = useState({ name: "name" });

    console.log(
        "render",
        useMemo(() => ({ fixed }), [fixed])
    );
    return (
        <>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                增加
            </button>
            <p>count:{count.c}</p>
            {/* 注意的是在hook中使用memo的子级是否重新渲染，主要看父级的hook发没发生(因为浅比较的关系)，
            比如这里因为26行++的关系hook每次重新渲染，而且Child没有使用memo，所以尽管传入的值没有变化，但Child也每次重新渲染 */}
            <Child fixed={fixed} msg={"不使用memo"} />

            {/*这里使用了memo，那么就会进行比较，所以就算父级的hook每次渲染，传入的props没有变化，所以Child并不会每次重新渲染  */}
            <ChildC fixed={fixed} msg={"使用memo"} />

            {/*特殊情况： 这里因为传入的值被对象包裹,当每次地点击之后，父级hook重新渲染，这时虽然fixed没有变，但是fixed被包裹在一个对象中，这样每次重新传值的时候这个对象都是新创建的对象
            而memo默认使用的是浅比较，所以认为每次的值不同，所以就算使用了memo ,Child会每次重新渲染
            要解决这个问题就用到了useMemo */}
            <ChildC fixed={{ fixed }} msg={"使用memo，但传入的值被对象包裹"} />

            {/* useMemo相当于只有当后面的依赖项改变时，他才会重新调用第一个回调参数重新计算
            所以这里表示：  1.只要fixed没有变化，那么就不会重新计算() => ({ fixed })；
            2.那么整个 useMemo(() => ({ fixed }), [fixed]) 的返回值也就不变
            3.引用不变，memo判断props没有变化---Child不需要重新渲染 */}
            <ChildC
                fixed={useMemo(() =>  ({ fixed }), [fixed])}
                msg={"传入的值被对象包裹,使用useMemo"}
            />


            {/* 如果我们使用的是useState的对象，那么也不会重新渲染；
            因为他并没有被改变，所以每次重新渲染他也不会重新创建，相当于引用没有改变，所以memo判断相等 */}
            <ChildC fixed={obj} msg={"使用memo，传入useState的对象"} />
        </>
    );
};

export default Parent;
