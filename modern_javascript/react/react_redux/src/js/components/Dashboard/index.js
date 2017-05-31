import React from "react";

import Header from "../../containers/Core/Header";

import Card from "../Core/Card";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Header name={"dashboard"} />
        <input type="text" onChange={this.props.setInfoEvent} />
        <Card name={this.props.dashboard.info} />
      </div>
    );
  }
}
