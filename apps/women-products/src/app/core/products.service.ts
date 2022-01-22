import HttpWrapperService from './http-wrapper.service';

const ProductService = {
    getAllProducts: () => {
        return HttpWrapperService.get('https://rainy-star.surge.sh/products.json');
    }
};

export default ProductService;