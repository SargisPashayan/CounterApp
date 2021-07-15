import React, { Component } from "react";
import Button from "./Button";
import "../App.css";
import InputStep from "./InputStep";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      step: 1,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + this.state.step,
    });
  };

  decrementCount = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };

  changeStep = (e) => {
    this.setState({
      step: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    let { count } = this.state;
    let { step } = this.state;
    return (
      <div className="counter">
        <h1>Count: {count}</h1>
        <Button sign="+" operation={this.incrementCount} />      {/* () => this.incremntCount */}
        <Button
          count={count}
          sign="-"
          operation={this.decrementCount}
        />
        <InputStep step={step} changeStep={this.changeStep} />
      </div>
    );
  }
}

export default Counter;