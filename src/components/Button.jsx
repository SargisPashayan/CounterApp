import React, { Component } from "react";

class Button extends Component {
  render() {
    let { sign, operation, toggle } = this.props;
    return <button disabled = {toggle} onClick={operation}>{sign}</button>;
  }
}

export default Button;
