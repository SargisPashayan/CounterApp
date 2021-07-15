import React, { Component } from "react";

class InputStep extends Component {
  render() {
    let { value, changeValue } = this.props;
    return <input type="number" value={value} onChange={changeValue}></input>;
  }
}

export default InputStep;