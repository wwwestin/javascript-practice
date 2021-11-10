let maximum = function (numbers) {
    if (numbers.length === 0) {
        return 'null';
    }
    let large = numbers[0];
    let largest = '';

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > large) {
            largest = numbers[i];
        }
    }
    return largest;
}

console.log(maximum([5, 6, 3, 7])); // 7
console.log(maximum([17, 15, 19, 11, 2])); // 19
console.log(maximum([])); // null