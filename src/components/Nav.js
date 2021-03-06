import React from 'react';
import '../styles/nav.css';

const Nav = ({ menu }) => {
  if (menu === '') {
    return <div />;
  }
  return (
    <header className={`nav ${menu ? 'visible' : 'hidden'}`}>
      <div />
      <a href="https://www.google.com">About</a>
      <a href="https://www.google.com">Projects</a>
      <a href="https://www.google.com">Github</a>
      <a href="https://www.google.com">LinkedIn</a>
    </header>
  );
};

export default Nav;
