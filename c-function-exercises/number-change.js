let numberChange = function (num) {
    if (num % 2 === 0) {
        return num / 2;
    } else {
        return num *2;
    }
};

console.log(numberChange(6)); // 3
console.log(numberChange(7)); // 14
console.log(numberChange(16)); // 8
console.log(numberChange(21)); // 42