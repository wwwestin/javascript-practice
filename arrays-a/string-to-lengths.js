let stringsToLengths = function (str) {
    let newArray = [];

    for (let i = 0; i < str.length; i++) {
        newArray.push(str[i].length);
    }
    return newArray;
};

console.log(stringsToLengths(["belly", "echo", "irony", "pickled"]));
// [5, 4, 5, 7]

console.log(stringsToLengths(["on", "off", "handmade"]));
// [2, 3, 8]