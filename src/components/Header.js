import React from 'react';
import MenuButton from './MenuButton';
import '../styles/header.css';

const Header = () => (
  <header>
    <MenuButton />
    <a href="https://www.google.com">About</a>
    <a href="https://www.google.com">Projects</a>
    <a href="https://www.google.com">Github</a>
    <a href="https://www.google.com">LinkedIn</a>
  </header>
);

export default Header;
