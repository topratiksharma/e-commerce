export interface ProductDetails {
    index: number,
    isExclusive: boolean,
    isSale: boolean,
    price: string,
    productImage: string,
    productName: string,
    size: string[],
}

export enum TShirtSize {
    EXTRA_SMALL = 'XS',
    SMALL = 'S',
    MEDIUM = 'M',
    LARGE = 'L',
    EXTRA_LARGE = 'XL'
}

export const Filters = {
    SIZE: 'size',
    PRICE: 'price'
}