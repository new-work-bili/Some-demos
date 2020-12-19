//声明context并导出
import React from 'react'

//需要单独一个文件进行引入
//要用var

//只有当组件所处的树中没有匹配到 Provider 时，这个默认值defults 参数才会生效。
var testContext = React.createContext('defults');
//相当于testContext是一个对象-->{Provider,Consumer}
//使用：1.消费者
//<testContext.Provider></testContext.Provider>

var {Provider,Consumer} = React.createContext('defults');
//直接分开
//使用：1.消费者：
//<Provider></Provider>

export {testContext}