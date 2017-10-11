import React, { Component } from 'react';
import Header from './Header';
import Hello from './Hello';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <Header />
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
