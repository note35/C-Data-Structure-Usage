import React from "react";

import Title from "./Header/Title";

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <header>header start</header>
        <Title />
        <header>header end</header>
      </div>
    );
  }
}
