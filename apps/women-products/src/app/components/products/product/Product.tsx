import { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { ProductDetails } from '../types';
import './Product.module.scss';

/* eslint-disable-next-line */
export interface ProductProps  {
  ProductDetails: ProductDetails;
}

export class Product extends Component<ProductProps> {
  render() {
    return (
      <div>
        <p>Welcome to Product!</p>
      </div>
    );
  }
}

export default Product;
