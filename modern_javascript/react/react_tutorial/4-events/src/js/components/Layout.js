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

  changeTitle(title) {
    this.setState({title}); //{title: title}
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
        <hr />
        It {this.state.stats}!
        <hr />
        <Footer />
      </div>
    );
  }
}
