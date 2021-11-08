let oddSum = function (max) {
    let sum = 0;

    for (let i = 1; i <= max; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum;
};

console.log(oddSum(10)); // 25
console.log(oddSum(5)); // 9