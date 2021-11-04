let stringRepeater = function (str, max) {
    let newStr = '';

    for(let i = 1; i <= max; i++) {
        newStr += str;
    }
    return newStr;
};

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'