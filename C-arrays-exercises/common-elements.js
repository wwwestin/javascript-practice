let commonElements = function (arr1, arr2) {
    let common= [];

    for (let i = 0; i < arr1.length; i++) {
        let ele = arr1[i];

        if (arr2.includes(ele)) {
            common.push(ele);
        }
    }
    return common;
};

let arr1 = ["a", "c", "d", "b"];
let arr2 = ["b", "a", "y"];
console.log(commonElements(arr1, arr2)); // ['a', 'b']

let arr3 = [4, 7];
let arr4 = [32, 7, 1, 4];
console.log(commonElements(arr3, arr4)); // [4, 7]