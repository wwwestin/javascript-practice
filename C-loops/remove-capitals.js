let removeCapitals = function (str) {
    let noCaps = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char === char.toLowerCase()) {
            noCaps += char;
        }
    }
    return noCaps;
};

console.log(removeCapitals("fOrEver")); // 'frver'
console.log(removeCapitals("raiNCoat")); // 'raioat'
console.log(removeCapitals("cElLAr Door")); // 'clr oor'