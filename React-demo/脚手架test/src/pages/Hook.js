import React, { PureComponent } from 'react'
import Hook from '../components/Hook/hook'
import Err from '../components/Hook/error-test'
import UseDeep from '../components/Hook/wuXianXunHuan'

export default class HookTest extends PureComponent {
    render() {
        return (
            <div>
                <Hook></Hook>
                <hr/>
                <h2>错误示范：</h2>
                <Err></Err>
                <hr/>
                <h2>useEffect的无限循环:</h2>
                <UseDeep></UseDeep>
            </div>
        )
    }
}


