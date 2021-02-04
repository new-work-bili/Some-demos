//对应conponents文件夹的组件，为他们绑定connet
//然后导出被page引入
import fliterList from "../conponents/fliterList";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        //
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(fliterList);
