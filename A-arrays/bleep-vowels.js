let bleepVowels = function (word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    for (let i = 0; i < word.length; i++) {
        if (vowels.indexOf(word[i]) > -1) {
            newStr += '*';
        } else {
            newStr += word[i];
        }
    }
    return newStr;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'