let productUpTo = function (max) {
    let product = 1;

    for (let i = 1; i <= max; i++) {
        product *= i;
    }
    return product;
};

console.log(productUpTo(4)); // 24
console.log(productUpTo(5)); // 120
console.log(productUpTo(7)); // 5040