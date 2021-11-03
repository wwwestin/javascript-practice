let stayPositive = function (numbers) {
    let positives = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
        positives.push(numbers[i])
    }
}
    return positives;
};

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []