import React from "react";

export default class Header extends React.Component {
  render() {

    const {login, logout, name} = this.props;

    let buttonName = "login";
    let buttonEvent = login
    if(this.props.core.loginStat) {
      buttonName = "logout";
      buttonEvent = logout;
    }

    return (
      <div>
        Current: {name}
        <br />
        <button onClick={buttonEvent}>
          {buttonName}
        </button>
        <hr />
      </div>
    );
  }
}
