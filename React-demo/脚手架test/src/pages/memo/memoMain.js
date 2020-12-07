import React, { PureComponent } from 'react'
import Func from './memo_Func'
import Hook from './memo_Hook'


export default class memoMain extends PureComponent {
    render() {
        return (
            <div>
                <Func></Func>
                <hr/>
                <Hook></Hook>
            </div>
        )
    }
}
