
//array          //elements
//let fruits = ['apple', 'mango', 'kiwi'];
//let stuff = [true, 42, 'dog'];
//console.log(fruits);
//console.log(fruits.length);
//console.log(fruits[0]);
//console.log(fruits[1]);
//console.log(stuff);
///stuff.push('cat');
//console.log(stuff);

//let alphabet = ['a', 'b', 'c', 'dog', 'e'];
//console.log(alphabet.indexOf('d'));
//console.log(alphabet.indexOf('dog'));
//console.log(alphabet.slice(1,3));

let array = ['art', 'banana', 'crayon', 'dog', 'mississippi'];

let longWords = [];

for (let i = 0; i < array.length; i++) {
    let word = array[i];
    if (word.length >= 4) {
        longWords.push(word);
    }
}

console.log(longWords);

//let i =2;
//console.log(array[i]);