import React, { PureComponent } from 'react'
import Func from '../components/Memo/memo_Func'
import Hook from '../components/Memo/memo_Hook'


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
