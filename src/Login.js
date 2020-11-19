import React, {Component} from 'react';

class Login extends Component {

  login() {
    this.props.history.push('/secured');
  }

  render() {
    return (
      <div className="row">
        <button className="btn btn-primary" onClick={() => this.login()}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;
