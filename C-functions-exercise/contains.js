let contains = function(str1,str2){
    let lowerStr1 = str1.toLowerCase();
    let lowerStr2 = str2.toLowerCase();
    return lowerStr1. indexOf(lowerStr2) > -1
};

console.log(contains("caterpillar", "pill")); // true
console.log(contains("lion's share", "on")); // true
console.log(contains("SORRY", "or")); // true
console.log(contains("tangent", "gem")); // false
console.log(contains("clock", "ok")); // false