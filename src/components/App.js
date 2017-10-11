import React, { Component } from 'react';
import Header from './Header';
import Hello from './Hello';
import MenuButton from './MenuButton';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: '',
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    if (this.state.menu === '') {
      this.setState.menu = true;
    }
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const { menu } = this.state;

    return (
      <main className="App">
        <MenuButton handleMenuClick={this.handleMenuClick} />
        <Header menu={menu} />
        {/* <Hello /> */}
        <nav className="nav">
          {/* <div className="triangle-right" />
          <div className="triangle-down" />
          <div className="triangle-left" /> */}
          <div className="opacity greet-contatiner">
            <h1>Hello!</h1>
            <h1>I&apos;m James Sullivan</h1>
          </div>
        </nav>
      </main>
    );
  }
}

export default App;
