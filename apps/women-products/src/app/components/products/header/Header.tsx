import { Component } from 'react';
import './Header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {}

export class Header extends Component<HeaderProps> {
  render() {
    return (
      <div className="header">
        <div>
          <p>Women's tops</p>
        </div>
        <div>
          <select>
            <option>Filter by size</option>
            <option>Filter by price</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Header;
