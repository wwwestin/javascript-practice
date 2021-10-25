let endsWithT = function (str){
    let lastChar = str[str.length -1];
    return lastChar === 't';
};

console.log(endsWithT("smart")); // true
console.log(endsWithT("racket")); // true
console.log(endsWithT("taco")); // false
console.log(endsWithT("boomerang")); // false