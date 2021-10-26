let numberChange = function(n){
    if (n % 2 === 0) {
        return n / 2;
    } else {
        return n * 2;
    }
};

console.log(numberChange(6)); // 3
console.log(numberChange(7)); // 14
console.log(numberChange(16)); // 8
console.log(numberChange(21)); // 42