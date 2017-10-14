import React from 'react';
import '../styles/header.css';

const Nav = ({ menu }) => {
  if (menu === '') {
    return <div />;
  }
  return (
    <header className={menu !== '' && menu === true ? 'visible' : 'hidden'}>
      <div />
      <a href="https://www.google.com">About</a>
      <a href="https://www.google.com">Projects</a>
      <a href="https://www.google.com">Github</a>
      <a href="https://www.google.com">LinkedIn</a>
    </header>
  );
};

export default Nav;
