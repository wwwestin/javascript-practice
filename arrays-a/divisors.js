let divisors = function (num) {
    let newArray = [];

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            newArray.push(i);
        }
    }
    return newArray;
};

console.log(divisors(15)); // [1, 3, 5, 15]
console.log(divisors(7)); // [1, 7]
console.log(divisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]