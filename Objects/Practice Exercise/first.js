let product = {
    name: 'Jeans',
    size: 'S',
fit: 'Slim Fit',
};
let copyProduct = product;
console.log(product);
copyProduct.size = 'M';
console.log(product);
copyProduct.fit = 'Regular Fit';
console.log(product);
