import { Component } from 'react';
import './Header.module.scss';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Filter"
            value={'size'}
            // onChange={handleChange}
          >
            <MenuItem value={'size'}>Filter by size</MenuItem>
            <MenuItem value={'price'}>Filter by price</MenuItem>
          </Select>
        </div>
      </div>
    );
  }
}

export default Header;
