import React, { Component } from 'react';
import Header from './Header';
import Hello from './Hello';
import MenuButton from './MenuButton';
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick() {
    this.setState({ menu: !this.state.menu });
  }

  render() {
    const { menu } = this.state;

    return (
      <main className="App">
        <MenuButton handleMenuClick={this.handleMenuClick} />
        <Header menu={menu} />
        <Hello />
        <nav className="nav">
          <h1>Hello!</h1>
          <h1>I&apos;m James Sullivan</h1>
        </nav>
      </main>
    );
  }
}

export default App;
