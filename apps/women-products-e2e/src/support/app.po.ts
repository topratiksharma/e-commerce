export const getHeaderText = () => cy.get('p');

export const getHeader = () => cy.get('*[data-cy^="header"]');

export const getProductFilter = () => getHeader().get('*[data-cy^="header-filter"]').get('#product-filter');


export const productsJson = [
    {
        "index": 0,
        "isSale": true,
        "isExclusive": false,
        "price": "$18.88",
        "productImage": "product-1.jpg",
        "productName": "Striped shirt",
        "size": ["XS", "S", "L", "XL"]
    },
    {
        "index": 1,
        "isSale": false,
        "isExclusive": false,
        "price": "$25.44",
        "productImage": "product-2.jpg",
        "productName": "Denim shirt",
        "size": ["XS", "S"]
    },
    {
        "index": 2,
        "isSale": false,
        "isExclusive": true,
        "price": "$12.93",
        "productImage": "product-3.jpg",
        "productName": "Plain cotton t-shirt",
        "size": ["S", "M"]
    },
    {
        "index": 3,
        "isSale": false,
        "isExclusive": false,
        "price": "$26.32",
        "productImage": "product-4.jpg",
        "productName": "Plain 3/4 sleeve cotton t-shirt",
        "size": ["XL"]
    },
    {
        "index": 4,
        "isSale": false,
        "isExclusive": false,
        "price": "$12.16",
        "productImage": "product-5.jpg",
        "productName": "White dress shirt",
        "size": ["M", "L"]
    },
    {
        "index": 5,
        "isSale": false,
        "isExclusive": false,
        "price": "$30.27",
        "productImage": "product-6.jpg",
        "productName": "Long Sleeve Skivvy Top",
        "size": ["XS", "S", "M"]
    },
    {
        "index": 6,
        "isSale": true,
        "isExclusive": false,
        "price": "$24.26",
        "productImage": "product-7.jpg",
        "productName": "Puffer Vest with Hood",
        "size": ["M", "L", "XL"]
    },
    {
        "index": 7,
        "isSale": false,
        "isExclusive": true,
        "price": "$17.73",
        "productImage": "product-8.jpg",
        "productName": "Funnel Neck Swing Top",
        "size": ["XS", "S", "XL"]
    }
]