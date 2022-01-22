import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Products.module.scss';

/* eslint-disable-next-line */
export interface ProductsProps {}

export class Products extends Component<ProductsProps> {
  render() {
    return (
      <div>
        <p>Welcome to Products!</p>
        <ul>
          <li>
            <Link to="/">products root</Link>
          </li>
        </ul>
        <Route
          path="/"
          render={() => <div>This is the products root route.</div>}
        />
      </div>
    );
  }
}

export default Products;
