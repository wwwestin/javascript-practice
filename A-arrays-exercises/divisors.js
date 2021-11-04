let divisors = function (n) {
    let dividends = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            dividends.push(i);
        }
    }
    return dividends;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]