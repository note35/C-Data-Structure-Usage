import React from "react";

import Header from "../../core/containers/Header";
import Card from "../../core/components/Card";

export default class Layout extends React.Component {
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
