let contains = function (str1, str2) {
    let lowerStr1 = str1.toUpperCase();
    let lowerStr2 = str2.toUpperCase();
    return lowerStr1.indexOf(lowerStr2) > -1;
};

console.log(contains("caterpillar", "pill")); 
console.log(contains("lion's share", "on")); 
console.log(contains("SORRY", "or")); 
console.log(contains("tangent", "gem"));
console.log(contains("clock", "ok"));