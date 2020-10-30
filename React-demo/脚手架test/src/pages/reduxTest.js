import React, { PureComponent } from 'react'
import store from '../Redux'

export default class reduxTest extends PureComponent {
    render() {
        store.dispatch({type:'ADD',other:'dddd'})
        console.log(store.getState());
        return (
            <div>
            </div>
        )
    }
}
