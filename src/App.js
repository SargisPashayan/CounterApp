import React, { Component } from "react";
import "./App.css";
import Counter from './components/Counter';

class App extends Component {
  
  render() {
    return (
      <div className="counter">
        <Counter />
      </div>
    );
  }
}

export default App;