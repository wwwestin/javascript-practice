let stringsToLengths = function (words) {
    let count = [];

    for (let i = 0; i < words.length; i++) {
        count.push(words[i].length);
    }
    return count;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]