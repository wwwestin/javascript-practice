let reverseArray = function (numbers) {
 let reverse = [];

    for (let i = numbers.length -1; i >= 0; i--) {
        reverse.push(numbers[i]);
    }
    return reverse;
};

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]