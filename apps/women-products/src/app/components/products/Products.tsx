import { Component } from 'react';
import './Products.module.scss';
import ProductService from '../../core/products.service';
import Header from './header/Header';
import Product from './product/Product';
import { Filters, ProductDetails, TShirtSize } from './types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import sortBy from 'lodash/sortBy';
/* eslint-disable-next-line */

export class Products extends Component {
  state!: {
    products: [];
  };

  onFilterChange = (filterBy: string) => {
    let products: ProductDetails[] = [];
    if (filterBy === Filters.PRICE) {
      products = sortBy(this.state.products, filterBy);
    } else {
      const extraSmall: ProductDetails[] = [],
        small: ProductDetails[] = [],
        medium: ProductDetails[] = [],
        large: ProductDetails[] = [],
        extraLarge: ProductDetails[] = [];

      this.state.products.forEach((eachProduct: ProductDetails) => {
        if (eachProduct.size.includes(TShirtSize.EXTRA_SMALL)) {
          extraSmall.push(eachProduct);
        } else if (eachProduct.size.includes(TShirtSize.SMALL)) {
          small.push(eachProduct);
        } else if (eachProduct.size.includes(TShirtSize.MEDIUM)) {
          medium.push(eachProduct);
        } else if (eachProduct.size.includes(TShirtSize.LARGE)) {
          large.push(eachProduct);
        } else {
          extraLarge.push(eachProduct);
        }
      });
      products = [...extraSmall, ...small, ...medium, ...large, ...extraLarge];
    }
    this.setState({ products });
  };

  render() {
    const products: ProductDetails[] = this.state?.products;
    return (
      <div>
        <Header onFilterChange={this.onFilterChange}></Header>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            {products &&
              products.map((item: ProductDetails) => (
                <Grid item xs={3} className="card" key={item.index}>
                  <Product productDetails={item}></Product>
                </Grid>
              ))}
          </Grid>
        </Box>
      </div>
    );
  }

  async componentDidMount() {
    const { data } = await ProductService.getAllProducts();
    this.setState({ products: data });
  }
}

export default Products;
