let filterLongWords = function (words) {
    let newArray = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 5) {
        newArray.push(words[i]);
        }
    }
    return newArray;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']