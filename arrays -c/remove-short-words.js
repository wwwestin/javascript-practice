let removeShortWords = function (sentence) {
    let words = sentence.split(' ');
    let longWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.length >= 4) {
            longWords.push(word);
        }
    }
    return longWords;
};

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'