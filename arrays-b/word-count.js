let wordCount = function (sentence, targetWords) {
    let words = sentence.split(' ');
    let count = 0;

    for (let i = 0; i < sentence.length; i++) {
        let word = words[i];
        if (targetWords.includes(word)) {
            count ++;
        }
    }
    return count;
};

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3