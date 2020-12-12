import React, { PureComponent } from 'react'
import Hook from './hook'
import Err from './error-test'

export default class hookMain extends PureComponent {
    render() {
        return (
            <div>
                <Hook></Hook>
                <hr/>
                <h2>错误示范：</h2>
                <Err></Err>
            </div>
        )
    }
}


