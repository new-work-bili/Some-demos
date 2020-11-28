import React, { PureComponent } from "react";

export default class Student extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            resData: "",
        };
    }
    //发ajax
    sendAjax = () => {
        var url = "http://localhost:3001/get_S/";

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();

        const that = this;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var resData = JSON.parse(xhr.responseText);
                    console.log("成功！", resData);
                    that.setState({
                        resData: resData.data,
                    });
                } else {
                    console.log("error", resData);
                }
            }
        };
    };
    componentDidMount() {
        this.sendAjax();
    }

    render() {
        return (
            <div>
                <h1>这里是学生</h1>
                <h2 style={{ color: "red" }}>获取数据：{this.state.resData}</h2>
            </div>
        );
    }
}
