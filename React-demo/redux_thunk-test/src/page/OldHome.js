import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../redux/store";

export class HomeContiainers extends Component {
    addClick = () => {
        axios.post("http://localhost:8001/login/").then(() => {
            console.log(55);
            store.dispatch({ type: "ADD" });
        });
        alert(22);
    };
    render() {
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
