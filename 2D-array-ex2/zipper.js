let zipper = function (array1, array2) {
    let pair = [];

    for (let i = 0; i < array1.length; i++) {
        let ele1 = array1[i];
        let ele2 = array2[i];

        pair.push(ele1,ele2);

    }
    return pair;
};

let array1 = ["a", "b", "c", "d"];
let array2 = [-1, -2, -3, -4];
console.log(zipper(array1, array2));
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