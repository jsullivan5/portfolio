import React, { Component } from 'react';
import Nav from './Nav';
import MenuButton from './MenuButton';
import Header from './Header';
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
        <Nav menu={menu} />
        <Header />
      </main>
    );
  }
}

export default App;
