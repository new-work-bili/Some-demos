/* 
这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
传入参数是redux的store，返回的是一个store对象
这样就能在板顶容器里通过props调用store了
相当于get store里的数值，搞这么多麻烦的东西主要是为了做优化：即在什么时候重新加载 
*/
const mapStateToProps = (store) => {
  return {
    num: store.num,
    other:store.other
  };
};


/* 
相当于对dispatch的调用映射，就是post;它定义了哪些用户的操作(key)应该当作store中的 Action.type，进而调用
既可以是韩式也可以是对象
作为函数，会接受两个参数，并返回一个对象：key是用户调用的事件，value是如果调用了响应的key那么redux会调用value这个函数，也就是dispatch
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    mapAdd: () => {
      //value是一个函数，redux会自己去调用
      dispatch({
        type: "ADD",
        filter: ownProps.filter,
      });
    },
  };
};

//作为对象
// const mapDispatchToProps = {
//   mapAdd: (filter) => {
//     type: 'SET_VISIBILITY_FILTER',
//     filter: filter
//   };
// }

export { mapStateToProps, mapDispatchToProps };
