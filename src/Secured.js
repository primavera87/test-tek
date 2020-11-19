import React, {Component} from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';
import Timer from './Timer';

class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keycloak: null,
      authenticated: false,
    };
  }

  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    keycloak.init({onLoad: 'login-required'}).then(authenticated => {
      this.setState({
        keycloak,
        authenticated,
        seconds: Date.now() - keycloak.idTokenParsed.auth_time
      })
    })
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <div>
          <Timer keycloak={this.state.keycloak}/>
          <UserInfo keycloak={this.state.keycloak}/>
          <hr/>
          <Logout keycloak={this.state.keycloak}/>
        </div>
      ); else return (<div className="row">Unable to authenticate!</div>)
    }
    return (
      <div className="row">Initializing keycloak....</div>
    );
  }
}

export default Secured;
