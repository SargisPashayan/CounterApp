import React, { Component } from "react";

class Button extends Component {
  render() {
    let { title, operation } = this.props;
    return <button onClick={operation}>{title}</button>;
  }
}

export default Button;
