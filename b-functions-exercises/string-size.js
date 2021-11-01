let stringSize = function (str) {
    if (str.length < 5) {
        return 'small';
    } else if (str.length === 5) {
        return 'medium';
    } else {
        return 'large';
    }
};

console.log(stringSize("cat")); // 'small'
console.log(stringSize("bell")); // 'small'
console.log(stringSize("ready")); // 'medium'
console.log(stringSize("shirt")); // 'medium'
console.log(stringSize("shallow")); // 'large'
console.log(stringSize("intelligence")); // 'large'