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
        <div className="filter" />
        <MenuButton handleMenuClick={this.handleMenuClick} />
        <Header menu={menu} />
        {/* <Hello /> */}
        <nav className="nav">
          {/* <div className="triangle-right" />
          <div className="triangle-down" />
          <div className="triangle-left" /> */}
          <div> {/* className="opacity greet-contatiner" */}
            <h1 className="my-name">I&apos;m James <span>Sullivan</span></h1>
            <p className="my-title">Web Developer</p>
          </div>
        </nav>
      </main>
    );
  }
}

export default App;
