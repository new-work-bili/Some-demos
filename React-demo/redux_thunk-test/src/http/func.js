//接口封装
import axios from "axios";
import store from "../redux/store";

const loginAPI = function () {
    return store.dispatch(() => {
        axios.post("http://localhost:8001/login/").then((res) => {
            store.dispatch({ type: "GET_SUCCESS" });
        });
    });
};

export default loginAPI;
