let stringsToLengths = function(str) {
    let lengths = [];

    for (let i = 0; i < str.length; i++) {
        lengths.push(str[i].length);
    }
    return lengths;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]