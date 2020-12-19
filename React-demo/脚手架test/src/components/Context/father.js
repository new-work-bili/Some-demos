import React, { PureComponent } from "react";
import { testContext } from "./context";
import Child from "./child";

export default class father extends PureComponent {
    render() {
        console.log(testContext);
        const data = {
            name:'lpp',
            sex:'man'
        }
        return (
            <div
                style={{
                    width: "500px",
                    height: "500px",
                    border: "1px solid red",
                }}
            >
                <testContext.Provider value={data}>
                    <Child></Child>
                    <testContext.Consumer>
                        {(value)=>
                            <p>直接使用Consumer消费组件，获取value:{value.name}</p>
                        }
                    </testContext.Consumer>
                </testContext.Provider>
            </div>
        );
    }
}
