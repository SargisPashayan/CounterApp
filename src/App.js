import React, {Component} from "react";
import Button from "./components/Button";
import "./App.css";


class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1,
    })
  }

  render() {
    let { count } = this.state;
    return (
      <div className = "counter">
        <h1>Count: {count}</h1>
        <Button sign = "+" operation = { () => this.incrementCount() }/>
        <Button count = {count} sign = "-" operation = { () => this.decrementCount() }/>
      </div>

    )
  }
}

export default App;
