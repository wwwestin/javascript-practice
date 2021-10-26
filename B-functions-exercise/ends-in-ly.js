let endsInLy = function(str){
    let secondLast = str[str.length -2];
    let last = str[str.length -1];
    if (secondLast === "l" && last === "y") {
        return true;
    } else {
        return false;
    }
};

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidly")); // true
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true