import React, {Component} from 'react';

class UserInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      realm: "",
      id: "",
      token: "",
      tokenParsed: ""
    };

    this.props.keycloak.loadUserInfo().then(userInfo => {
      this.setState({
        name: this.props.keycloak.clientId,
        realm: this.props.keycloak.realm,
        id: userInfo.sub,
        token: this.props.keycloak.token,
        tokenParsed: JSON.stringify(this.props.keycloak.tokenParsed)
      })
    });
  }

  render() {
    return (
      <div>
        <hr/>
        <h3>Общая информация о сеансе из токена JWT.</h3>
        <ul>
          <li>Name: {this.state.name}</li>
          <li>Realm: {this.state.realm}</li>
          <li>ID: {this.state.id}</li>
          <li>Token: {this.state.token}</li>
          <li>Token Parsed: {this.state.tokenParsed}</li>
        </ul>
      </div>

    );
  }
}

export default UserInfo;
