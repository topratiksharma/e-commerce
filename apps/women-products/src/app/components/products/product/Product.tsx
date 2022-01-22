import { Box } from '@mui/material';
import { ProductDetails } from '../types';
import './Product.module.scss';

type ProductProps = {
  productDetails: ProductDetails;
};

const Product: React.FC<ProductProps> = ({ productDetails }) => {
  return (
    <Box>
      <div>
        <img
          src={'assets/' + productDetails.productImage}
          alt={productDetails.productImage}
        ></img>
        <div className="offer">
          {productDetails.isExclusive && (
            <div className="exclusive">Exclusive</div>
          )}
          {productDetails.isSale && <div className="on-sale">Sale</div>}
        </div>
        <div className="details">
          <div>{productDetails.productName}</div>
          <div className="price">{productDetails.price}</div>
        </div>
      </div>
    </Box>
  );
};

export default Product;
