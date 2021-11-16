let zipper = function (arr1, arr2) {
    let pairs = [];

    for (let i = 0; i < arr1.length; i++) {
        let ele1 = arr1[i];
        let ele2 = arr2[i];

        pairs.push(ele1, ele2);

    }
    return pairs;
};

let arr1 = ["a", "b", "c", "d"];
let arr2 = [-1, -2, -3, -4];
console.log(zipper(arr1, arr2));
// [
//   ['a', -1],
//   ['b', -2],
//   ['c', -3],
//   ['d', -4],
// ]

let array3 = ["whisper", "talk", "shout"];
let array4 = ["quiet", "normal", "loud"];
console.log(zipper(array3, array4));
// [
//   ['whisper', 'quiet'],
//   ['talk', 'normal'],
//   ['shout', 'loud'],
// ]