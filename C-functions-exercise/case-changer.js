let caseChange = function(str,bool){
    if (bool === true) {
    return str.toUpperCase();
} else {
    return str.toLowerCase();
}
}; 

console.log(caseChange("Super", true)); // 'SUPER'
console.log(caseChange("Super", false)); // 'super'
console.log(caseChange("tAmBourine", true)); // 'TAMBOURINE'
console.log(caseChange("tAmBourine", false)); // 'tambourine'