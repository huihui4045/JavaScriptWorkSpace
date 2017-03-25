/**
 * Created by molu_ on 2017/3/22.
 */


class User extends React.Component {

    render(){

        return <div>Hello{this.props.name}</div>
    }
}


ReactDOM.render(<User name="lvpeng" sex="nan"></User>,document.body);