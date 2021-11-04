let stringRepeater = function (str, num) {
    let newStr = '';

    for (let i = 1; i <= num; i++) {
        newStr += str;
    }
    return newStr;
};

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'