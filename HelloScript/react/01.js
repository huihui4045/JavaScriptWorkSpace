/**
 * Created by molu_ on 2017/3/22.
 */


var HelloReact=React.createClass({

    getInitialState :function () {

        return{liked:false}
    },

    handleClick:function (event) {

        this.setState({liked: !this.state.liked});
    },



    render :function () {

        var text=this.state.liked?'喜欢':'不喜欢';

        console.log("花心");
      //  console.log("花心=======");


        return (<p onClick={this.handleClick}>
            你<b>{text}</b>我。点我切换状态。
        </p>);
    }
});

ReactDOM.render(<HelloReact  name="jack"/>,document.getElementById('example'));