let stringRepeater = function (str, max) {
    let concat = '';

    for (let i = 0; i < max; i++) {
        concat += str;
    }
    return concat;
};

console.log(stringRepeater("q", 4)); // 'qqqq'
console.log(stringRepeater("go", 2)); // 'gogo'
console.log(stringRepeater("tac", 3)); // 'tactactac'