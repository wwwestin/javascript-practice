let numOdds = function (numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number % 2 === 1) {
            count ++;
        }
    }
    return count;
};

console.log(numOdds([4, 7, 2, 5, 9])); // 3
console.log(numOdds([11, 31, 58, 99, 21, 60])); // 4
console.log(numOdds([100, 40, 4])); // 0