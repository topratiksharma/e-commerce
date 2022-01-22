import { Component } from 'react';
import './Products.module.scss';
import ProductService from '../../core/products.service';
import Header from './header/Header';
import Product from './product/Product';
import { ProductDetails } from './types';

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
        <div>
          { products &&
            products.map(
              (item: ProductDetails) =>
                // <tr key={item._id || item.id}>
                //   {columns.map((column) => (
                //     <td key={this.createKey(item, column)}>
                //       {this.renderCell(item, column)}
                //     </td>
                //   ))}
                // </tr>
                <Product key={item.index} ProductDetails={item}></Product>
            )}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    const { data } = await ProductService.getAllProducts();
    this.setState({ products: data });
  }
}

export default Products;
