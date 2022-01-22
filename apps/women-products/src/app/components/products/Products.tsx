import { Component } from 'react';
import './Products.module.scss';
import ProductService from '../../core/products.service';
import Header from './header/Header';
import Product from './product/Product';
import { ProductDetails } from './types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import sortBy from 'lodash/sortBy';
/* eslint-disable-next-line */
export interface ProductsProps {}

export class Products extends Component {
  state!: {
    products: [];
  };

  onFilterChange = (filterBy: string) => {
    let products: ProductDetails[] = [];
    if (filterBy === 'price') {
      products = sortBy(this.state.products, filterBy);
    } else {
      const XS: ProductDetails[] = [];
      const S: ProductDetails[] = [];
      const M: ProductDetails[] = [];
      const L: ProductDetails[] = [];
      const XL: ProductDetails[] = [];
      this.state.products.forEach((eachProduct: ProductDetails) => {
        if (eachProduct.size.includes('XS')) {
          XS.push(eachProduct);
        } else if (eachProduct.size.includes('S')) {
          S.push(eachProduct);
        } else if (eachProduct.size.includes('M')) {
          M.push(eachProduct);
        } else if (eachProduct.size.includes('L')) {
          L.push(eachProduct);
        } else {
          XL.push(eachProduct);
        }
      });
      products = [...XS, ...S, ...M, ...L, ...XL];
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
