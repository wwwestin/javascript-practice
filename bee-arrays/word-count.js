let wordCount = function (sentence, targetwords) {
    let words = sentence.split(' ');
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        if (targetwords.includes(words[i]))
        count ++;
    }
    return count;
};

console.log(wordCount("open the window please", ["please", "open", "sorry"])); // 2
console.log(wordCount("drive to the cinema", ["the", "driver"])); // 1
console.log(wordCount("can I have that can", ["can", "I"])); // 3