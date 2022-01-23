import { Component, useState } from 'react';
import './Header.module.scss';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
/* eslint-disable-next-line */
export interface HeaderProps {
  onFilterChange: (s: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange }) => {
  const handleChange = (event: any) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="header">
      <div>
        <p>Women's tops</p>
      </div>
      <div>
        <Select
          className="filter"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filter"
          onChange={handleChange}
          defaultValue={'size'}
        >
          <MenuItem value={'size'}>Filter by size</MenuItem>
          <MenuItem value={'price'}>Filter by price</MenuItem>
        </Select>
      </div>
    </div>
  );
};

export default Header;
