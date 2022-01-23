import { render } from '@testing-library/react';
import { ProductDetails } from '../types';

import Product from './Product';

describe('Product', () => {
  it('should render successfully', () => {
    const details: ProductDetails = {
      index: 0,
      isExclusive: true,
      isSale: false,
      price: '$2342',
      productImage: 'product-1.jpg',
      productName: 'test',
      size: []
    };
    const { baseElement } = render(<Product productDetails={details} />);
    expect(baseElement).toBeTruthy();
  });
});
