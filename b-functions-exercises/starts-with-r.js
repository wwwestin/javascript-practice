let startsWithR = function (str) {
    if (str[0] === 'R' || str[0] === 'r') {
        return true;
    } else {
        return false;
    }
};

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false