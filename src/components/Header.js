import React from 'react';
import SocialButtons from './SocialButtons';
import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div>
      <h1 className="my-name">I&apos;m James <span>Sullivan</span></h1>
      <p className="my-title">Web Developer</p>
      <SocialButtons />
    </div>
  </header>
);

export default Header;
