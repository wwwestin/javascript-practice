let censorE = function (str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === 'e') {
            newStr += '*';
        } else {
            newStr += str[i];
        }
    }
    return newStr;
};

console.log(censorE("speedy")); // 'sp**dy'
console.log(censorE("pending")); // 'p*nding'
console.log(censorE("scene")); // 'sc*n*'
console.log(censorE("heat")); // 'h*at'