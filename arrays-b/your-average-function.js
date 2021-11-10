let yourAverageFunction = function (num) {
    if (num.length === 0) {
        return 'null';
    }
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
     sum += num[i];
    }
    return sum / num.length;
};

console.log(yourAverageFunction([5, 2, 7, 24])); // 9.5
console.log(yourAverageFunction([100, 6])); // 53
console.log(yourAverageFunction([31, 32, 40, 12, 33])); // 29.6
console.log(yourAverageFunction([])); // null