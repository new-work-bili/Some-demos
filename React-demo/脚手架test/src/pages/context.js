//声明context并导出
import React from 'react'

//需要单独一个文件进行引入
//要用var
export var testContext = React.createContext('defults');//只有当组件所处的树中没有匹配到 Provider 时，这个默认值defults 参数才会生效。
export var testConsumer = testContext.Consumer;