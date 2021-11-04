let removeCapitals = function (str) {
    let newStr= '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === str[i].toLowerCase()) {
            newStr += char;
        }
    }
    return newStr;
};

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'