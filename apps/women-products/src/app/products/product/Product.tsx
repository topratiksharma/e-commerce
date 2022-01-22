import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Product.module.scss';

/* eslint-disable-next-line */
export interface ProductProps {}

export class Product extends Component<ProductProps> {
  render() {
    return (
      <div>
        <p>Welcome to Product!</p>

        <ul>
          <li>
            <Link to="/">product root</Link>
          </li>
        </ul>
        <Route
          path="/"
          render={() => <div>This is the product root route.</div>}
        />
      </div>
    );
  }
}

export default Product;
