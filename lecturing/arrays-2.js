//let people = ['richard', 'betty', 'jj', 'anne', 'kwasi'];

//let myStr = people.join('LOL');
//console.log(people.join('-'));
//console.log(myStr);
//console.log(people);

//console.log(people.indexOf('jj'));
//console.log(people.includes('mary'));

//let sentence = 'I cannot wait for dinner';
//let words = sentence.split('ait');

//for (let i = 0; i < words.length; i++) {
 //   console.log(words);
//};

let smallestNum = function (nums) {
    if (nums.length === 0) {
        return null;
    };

    let smallest = nums[0]

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        if (num < smallest) {
            smallest = num;
        } 
    }
    return smallest;
};

console.log(smallestNum([5,6,4,3,7]));
console.log(smallestNum([17,20]));
console.log(smallestNum([]));