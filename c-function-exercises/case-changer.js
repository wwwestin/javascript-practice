let caseChange = function (str1, bool) {
    if (bool) {
        return str1.toUpperCase();
    } else {
        return str1.toLowerCase();
    }
};

console.log(caseChange("Super", true)); // 'SUPER'
console.log(caseChange("Super", false)); // 'super'
console.log(caseChange("tAmBourine", true)); // 'TAMBOURINE'
console.log(caseChange("tAmBourine", false)); // 'tambourine'