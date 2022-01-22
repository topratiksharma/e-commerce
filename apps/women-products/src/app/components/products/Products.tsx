import { Component } from 'react';
import './Products.module.scss';
import ProductService from '../../core/products.service';
import Header from './header/Header';
import Product from './product/Product';
import { ProductDetails } from './types';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

/* eslint-disable-next-line */
export interface ProductsProps {}

export class Products extends Component {
  state!: {
    products: [];
  };

  render() {
    const products: ProductDetails[] = this.state?.products;
    return (
      <div>
        <Header></Header>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            {products &&
              products.map((item: ProductDetails) => (
                <Grid item xs={3} className='card'>
                  <Product key={item.index} productDetails={item}></Product>
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
