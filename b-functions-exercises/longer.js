let longer = function (str1, str2) {
    if (str1.length > str2.length || str1.length === str2.length) {
        return str1;
    } else if (str1.length < str2.length) {
        return str2;
    }
};

console.log(longer("drum", "piranha")); // 'piranha'
console.log(longer("basket", "fork")); // 'basket'
console.log(longer("flannel", "sustainable")); // 'sustainable'
console.log(longer("disrupt", "ability")); // 'disrupt'
console.log(longer("bird", "shoe")); // 'bird'