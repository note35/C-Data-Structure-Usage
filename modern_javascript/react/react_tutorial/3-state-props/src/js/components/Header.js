import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>header start</header>
        <Title title={this.props.title}/>
        <header>header end</header>
      </div>
    );
  }
}
