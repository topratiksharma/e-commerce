import { ProductDetails } from '../types';
import './Product.module.scss';

type ProductProps = {
  productDetails: ProductDetails;
};

const Product: React.FC<ProductProps> = ({ productDetails }) => {
  return (
    <div className="card">
      <div>
        <img
          src={'assets/' + productDetails.productImage}
          alt={productDetails.productImage}
        ></img>
        {productDetails.isExclusive && (
          <div className="exclusive">Exclusive</div>
        )}
        {productDetails.isSale && <div className="on-sale">Sale</div>}
        <div className='details'>
          <div>{productDetails.productName}</div>
          <div className='price'>{productDetails.price}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
