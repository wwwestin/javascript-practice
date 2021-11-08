let filterLongWords = function (words) {
    let shortWords = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 5) {
        shortWords.push(words[i]);
    }
}
    return shortWords;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']