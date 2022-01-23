import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';
import { ProductDetails } from './components/products/types';

jest.mock('./core/products.service.ts', () => {
  const users: ProductDetails[] = [];
  return {
    getAllProducts: jest.fn(() => Promise.resolve(users))
  };
});

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', async () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(getByText("Women's tops")).toBeTruthy();
  });
});
