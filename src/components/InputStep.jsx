import React, { Component } from "react";

class InputStep extends Component {
  render() {
    let { step, changeStep } = this.props;
    return <input type="number" value={step} onChange={changeStep}></input>;
  }
}

export default InputStep;