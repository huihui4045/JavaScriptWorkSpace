/**
 * Created by molu_ on 2017/3/23.
 */


var TextComponent = React.createClass({


        render: function () {

            return <div>{this.props.text}!</div>
        }
    }
);


var WrapperComponent=React.createClass({

    getInitialState :function () {

        return{text:''};
    },

    handleChange :function (e) {

        this.setState({text:e.target.value});
    },

    render :function () {

        return<div>

            <TextComponent text={this.state.text}/>

            <input type="text" onChange={this.handleChange}/>

        </div>
    }

});

ReactDOM.render(<WrapperComponent/>, document.getElementById('mydiv'));