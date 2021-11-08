let reverseArray = function (arr) {
    let newArray = [];

    for (let i = arr.length -1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
};

console.log(reverseArray(["zero", "one", "two", "three"])); // ['three', 'two', 'one', 'zero']
console.log(reverseArray([7, 1, 8])); // [8, 1, 7]