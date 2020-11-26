import React, { PureComponent } from 'react'

export default class Student extends PureComponent {
    //发ajax
    sendAjax = ()=>{
        var url = "http://localhost:3001/get_S/";

        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.open("POST", url, true);
        // xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded")
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send();


        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    console.log('成功！');
                } else {
                    console.log("error", xhr);
                }
            }
        };
    }
    componentDidMount(){
        this.sendAjax()
    }
    
    render() {
        return (
            <div>
                <h1>这里是学生</h1>
            </div>
        )
    }
}
