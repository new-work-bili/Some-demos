import loginAPI from "../http/func";
import store from "../redux/store";
import React, { Component } from "react";
import { connect } from "react-redux";

export class HomeContiainers extends Component {
    addClick = () => {
        //好处,节省代码量，把一些代码逻辑封装在action--一切为了代码复用--
        //这个例子也不好.....
        loginAPI();
    };
    render() {
        // const { pops } = this.props;
        return (
            <div>
                <button onClick={this.addClick}>点击</button>
                <span>pop:{store.getState().num}</span>
            </div>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        num: store.num,
    };
};

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(HomeContiainers);
