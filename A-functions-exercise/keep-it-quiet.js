let keepItQuiet = function (str){
    let uncapitilized = str.toLowerCase();
    return uncapitilized + "...";
};

console.log(keepItQuiet("HOORAY"));
console.log(keepItQuiet("Doggo"));
console.log(keepItQuiet("WHAT?!?!"));