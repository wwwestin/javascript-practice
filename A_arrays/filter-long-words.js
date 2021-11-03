let filterLongWords = function (words) {
    let chosenWords = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < 5) {
        chosenWords.push(words[i]);
        }
    }
        
         return chosenWords;
};

console.log(filterLongWords(["kale", "cat", "retro", "axe", "heirloom"]));
// ['kale', 'cat', 'axe']

console.log(filterLongWords(["disrupt", "pour", "trade", "pic"]));
// ['pour', 'pic']