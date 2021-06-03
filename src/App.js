import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  };
  render() {
    let colors =
      this.state.count > 0 ? "green" : this.state.count < 0 ? "red" : "";
    return (
      <div className="container">
        <p className={colors}>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
        <button onClick={this.resetCount}>Reset</button>
      </div>
    );
  }
}

export default App;
