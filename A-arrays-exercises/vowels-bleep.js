let bleepVowels = function (str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'] ;
    let bleeped = '';

    for (let i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) > -1) {
            newStr += "*";
        } else {
            newStr += str[i];
        }
    }
    return bleeped;
};

console.log(bleepVowels("skateboard")); // 'sk*t*b**rd'
console.log(bleepVowels("slipper")); // 'sl*pp*r'
console.log(bleepVowels("range")); // 'r*ng*'
console.log(bleepVowels("brisk morning")); // 'br*sk m*rn*ng'