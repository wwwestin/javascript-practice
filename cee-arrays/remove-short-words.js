let removeShortWords = function (sentence) {
    let words = sentence.split(' ');
    let chosenwords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length >= 4) {
            chosenwords.push(word);
        }
    }
    return chosenwords.join(' ');
};

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'