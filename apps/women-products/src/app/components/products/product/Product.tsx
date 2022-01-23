import { Box } from '@mui/material';
import { ProductDetails } from '../types';
import './Product.module.scss';

type ProductProps = {
  productDetails: ProductDetails;
};

const Product: React.FC<ProductProps> = ({ productDetails }) => {
  return (
    <Box>
      <div className="card-details">
        <div>
          <img
            src={'assets/' + productDetails.productImage}
            alt={productDetails.productImage}
          ></img>
        </div>
        <div className="offer">
          {productDetails.isExclusive && (
            <div className="exclusive">Exclusive</div>
          )}
          {productDetails.isSale && <div className="on-sale">Sale</div>}
        </div>
      </div>
      <div className="details">
        <div className="product-name" title={productDetails.productName}>
          {productDetails.productName}
        </div>
        <div className="price">{productDetails.price}</div>
      </div>
    </Box>
  );
};

export default Product;
