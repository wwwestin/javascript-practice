let reverseArray = function (arr) {
    let reverse = [];

    for (let i = arr.length -1; i >= 0; i--) {
        let numbers = arr[i];
        reverse.push(numbers);
    }
    return reverse;
};

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]