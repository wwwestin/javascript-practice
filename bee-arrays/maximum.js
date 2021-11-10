let maximum = function (numbers) {
    if (numbers.length === 0) {
        return 'null';
    }
    let longer = numbers[0];
    let longest = '';

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >= longer) {
            longest = numbers[i];
        }
    }
    return longest;
};

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null