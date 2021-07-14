import React, { Component } from "react";

class Button extends Component {
  render() {
    let { sign, count, operation } = this.props;
    return <button disabled = {count <= 0} onClick={operation}>{sign}</button>;
  }
}

export default Button;
