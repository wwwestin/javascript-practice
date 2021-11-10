let filterLongWords = function (str) {
    let shortWords = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i].length < 5) {
            shortWords.push(str[i]);
        }
    }
    return shortWords;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']