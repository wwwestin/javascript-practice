let alternatingCaps = function (sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (i % 2 === 0) {
            newWords
    .push(word.toLowerCase());
        } else {
            newWords
    .push(word.toUpperCase());
        }
    }
    return newWords;
};

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'