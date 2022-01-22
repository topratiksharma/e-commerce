import { Component } from 'react';

import './Header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <div>
        <p>Welcome to Header!</p>
      </div>
    );
  }
}

export default Header;
