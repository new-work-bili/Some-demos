import React, { PureComponent } from 'react'
import "../../assets/style/cookie.scss";

const loginWrapper = {
    color:'red',
    position:'relative'
}

export default class Login extends PureComponent {
    login = ()=>{
        const xhr = new XMLHttpRequest();
        // xhr.withCredentials = true
        var url = "http://localhost:3001/login/"
        // var quer= '/login/'
        xhr.open("POST",url,true)
        var data = {account:1,password:0}
        console.log(JSON.stringify(data));
        xhr.send(JSON.stringify(data))

        xhr.onreadystatechange = function(data){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log('success',xhr.responseText);
                }else{
                    console.log('error',xhr);
                    
                }
            }
        }
    }
    render() {
        return (
            <div style={loginWrapper}>
                <div className="div_form-box">
                    <div className="div_form">
                        账号：<input type="text"></input>
                        <br></br>
                        密码：<input type="password"></input>
                        <br></br>
                        <button onClick={this.login}>登陆</button>
                    </div>
                </div>
            </div>
        )
    }
}
