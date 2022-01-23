import './Header.module.scss';
import { ChangeEvent } from 'react';
// import option from '@mui/material/option';

export interface HeaderProps {
  onFilterChange: (s: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  return (
    <div className="header" data-cy="header">
      <div data-cy="header-text">
        <p>Women's tops</p>
      </div>
      <div data-cy="header-filter">
        <select
          className="filter"
          id="product-filter"
          onChange={handleChange}
          defaultValue={'size'}
        >
          <option value={'size'}>Filter by size</option>
          <option value={'price'}>Filter by price</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
