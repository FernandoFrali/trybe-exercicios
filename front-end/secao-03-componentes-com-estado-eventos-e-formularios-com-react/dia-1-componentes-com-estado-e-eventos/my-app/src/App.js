import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.countClicks = this.countClicks.bind(this);
    this.state = {
      clicksNumber: 0,
    };
  }

  countClicks() {
    this.setState((previous) => ({
      clicksNumber: previous.clicksNumber + 1,
    }));
  }

  changeBack(n) {
    return n % 2 === 0 ? 'violet' : 'purple';
  }

  render() {
    const { clicksNumber } = this.state;
    return (
      <button
        onClick={this.countClicks}
        style={{ backgroundColor: this.changeBack(clicksNumber) }}
      >{`Cliques: ${clicksNumber}`}</button>
    );
  }
}
export default App;
