let alternatingCaps = function (sentence) {
    let words = sentence.split(' ');
    let newArr = [];

    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 0) {
            newArr.push(words[i].toLowerCase());
        } else {
            newArr.push(words[i].toUpperCase());
        }
    }
    return newArr;
};

console.log(alternatingCaps("take them to school")); // 'take THEM to SCHOOL'
console.log(alternatingCaps("What did ThEy EAT before?")); // 'what DID they EAT before?'