import React from "react";

import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
        stats: "works",
        title: "Title"
    }
  }
  render() {
    setTimeout(() => {
      this.setState({stats: "not work", title: "New Title"});
    }, 1000);
    return (
      <div>
        <Header title={this.state.title}/>
        <hr />
        It {this.state.stats}!
        <hr />
        <Footer />
      </div>
    );
  }
}
