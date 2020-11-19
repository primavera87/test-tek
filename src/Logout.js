import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Logout extends Component {

  logout() {
    this.props.history.push('/');
    this.props.keycloak.logout();
  }

  render() {
    return (
      <div className="row">
        <button className="btn btn-primary" onClick={() => this.logout()}>
          Logout
        </button>
      </div>
    );
  }
}

export default withRouter(Logout);
