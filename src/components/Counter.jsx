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
      max: 100,
      min: 0,
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

  reset = () => {
    this.setState({
      count: 0,
    });
  };

  changeStep = (e) => {
    this.setState({
      step: parseInt(e.target.value, 10) || 0,
    });
  };

  maxStep = (e) => {
    this.setState({
      max: parseInt(e.target.value, 10) || 0,
    });
  };

  minStep = (e) => {
    this.setState({
      min: parseInt(e.target.value, 10) || 0,
    });
  };

  componentDidMount() {
    const stringCount = localStorage.getItem("count");
    const count = parseInt(stringCount, 10);

    if (!isNaN(count)) {
      this.setState({ count: count });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  render() {
    let { count } = this.state;
    let { step } = this.state;
    let { max } = this.state;
    let { min } = this.state;

    return (
      <div className="counter">
        <h1>Count: {count}</h1>
        <Button toggle={count + step > max} sign="+" operation={this.incrementCount} />      {/* () => this.incremntCount */}
        <Button toggle={count - step < min} sign="-" operation={this.decrementCount} />
        <Button toggle={count - step < min} sign="Reset" operation={this.reset} />
        <InputStep value={step} changeValue={this.changeStep} />
        <InputStep  value={max} changeValue={this.maxStep} />;
        <InputStep value={min} changeValue={this.minStep} />;

        {/* <input type="number" value={max} onChange={this.maxStep}></input>;
        <input type="number" value={min} onChange={this.minStep}></input>; */}
      </div>
    );
  }
}

export default Counter;