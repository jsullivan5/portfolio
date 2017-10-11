import React from 'react';
import menu from './assets/menu36px.png';
import '../styles/MenuButton.css';

const MenuButton = ({ handleMenuClick }) => (
  <img
    onClick={handleMenuClick}
    className="menu-button"
    src={menu}
    alt="Menu button"
  />
);

export default MenuButton;
