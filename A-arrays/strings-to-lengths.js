let stringsToLengths = function (numbers) {
    let lengths = [];

    for (let i = 0; i < numbers.length; i++) {
        lengths.push(numbers[i].length);
    }
    return lengths;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]