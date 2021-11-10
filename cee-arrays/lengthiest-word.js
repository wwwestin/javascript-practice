let lengthiestWord = function (sentence) {
    let words = sentence.split(' ');

    let longest = words[0];

    for (let i = 1; i < words.length; i++) {
        let word = words[i];

        if (word.length >= longest.length) {
            longest = word;
        }
    }
    return longest;
};

console.log(lengthiestWord("I am pretty hungry")); // 'hungry'
console.log(lengthiestWord("we should think outside of the box")); // 'outside'
console.log(lengthiestWord("down the rabbit hole")); // 'rabbit'
console.log(lengthiestWord("simmer down")); // 'simmer'