import React, { PureComponent } from "react";
import "../../assets/style/cookie.scss";

const loginWrapper = {
    color: "red",
    position: "relative",
};

export default class Login extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            account: "123",
            password: "",
        };
    }
    login = () => {
        var url = "http://localhost:3001/login/";
        var data = {
            account: this.state.account,
            password: this.state.password,
        };
        console.log(JSON.stringify(data));

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open("POST", url, true);
        // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(data));

        var that = this;
        xhr.onreadystatechange = function (data) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var resData = JSON.parse(xhr.responseText);
                    if (resData.status == "S") {
                        that.props.history.push("/cookie/student");
                    } else {
                        that.props.history.push("/cookie/teach");
                    }
                } else {
                    console.log("error", xhr);
                }
            }
        };
    };
    accountChange = (e) => {
        this.setState({
            account: e.target.value,
        });
    };
    render() {
        return (
            <div style={loginWrapper}>
                <div className="div_form-box">
                    <div className="div_form">
                        账号：
                        <input
                            type="text"
                            onChange={this.accountChange}
                            value={this.state.account}
                        ></input>
                        <br></br>
                        密码：<input type="password"></input>
                        <br></br>
                        <button onClick={this.login}>登陆</button>
                    </div>
                </div>
            </div>
        );
    }
}
