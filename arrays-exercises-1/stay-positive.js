let stayPositive = function (numbers) {
    let positive = [];

    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (number > 0) {
            positive.push(number);
        }
    }
    return positive;
};

console.log(stayPositive([10, -4, 3, 6])); // [10, 3, 6]
console.log(stayPositive([-5, 11, -40, 30.3, -2])); // [11, 30.3]
console.log(stayPositive([-11, -30])); // []