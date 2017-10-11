import React from 'react';
import '../styles/header.css';

const Header = ({ menu }) => (
  <header className={menu ? 'visble' : 'hidden'}>
    <div />
    <a href="https://www.google.com">About</a>
    <a href="https://www.google.com">Projects</a>
    <a href="https://www.google.com">Github</a>
    <a href="https://www.google.com">LinkedIn</a>
  </header>
);

export default Header;
