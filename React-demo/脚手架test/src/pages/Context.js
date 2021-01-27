import React, { PureComponent } from 'react'
import Father from '../components/Context/father'

export default class context extends PureComponent {
    render() {
        return (
            <div>
                <h2>Context测试：</h2>
                <Father></Father>
            </div>
        )
    }
}
