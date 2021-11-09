let removeShortWords = function (sentence) {
    let words = sentence.split(' ');
    let newArr = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 4) {
            newArr.push(words[i]);
        }
    }
    return newArr;
};

console.log(removeShortWords("knock on the door will you")); // 'knock door will'
console.log(removeShortWords("a terrible plan")); // 'terrible plan'
console.log(removeShortWords("run faster that way")); // 'faster that'