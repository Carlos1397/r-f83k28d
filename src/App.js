import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    count: 0
  }
  render() {
    const count = this.state.count
    return (
      <div>
        <span className="value">{count}</span>
        <button  id="inc" onClick={() => this.setState({ count: count + 1 })}>Incrementa</button>
      </div>
    );
  }
}

export default App;
