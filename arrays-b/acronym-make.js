let makeAcronym = function (sentence) {
    let words = sentence.split(' ');
    acronym = '';

    for (let i = 0; i < words.length; i++) {
        let word = words[i].toUpperCase();
        acronym += word[0];

    }
    return acronym;
};

console.log(makeAcronym("New York")); // NY
console.log(makeAcronym("same stuff different day")); // SSDD
console.log(makeAcronym("Laugh out loud")); // LOL
console.log(makeAcronym("don't over think stuff")); // DOTS