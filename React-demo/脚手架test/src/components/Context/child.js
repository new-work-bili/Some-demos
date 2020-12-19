import React, { PureComponent } from 'react'
import { testContext } from "./context";

export default class child extends PureComponent {
    static contexdtTydddpe = testContext
    render() {
        return (
            <div>
                <p>类组件使用，value：{this.context.name}</p>
            </div>
        )
    }
}
