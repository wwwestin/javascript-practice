//console.log((20 + 25)/2);
//console.log((100 + 113)/2);

// function definition
//let calculateAverage = function (){
//console.log('i am a function');
//console.log('ending function');
//};

// function
//console.log('one');
//calculateAverage();
//console.log('two');
//calculateAverage();
//calculateAverage();


//function definition
//let calculateAverage= function(num1, num2){
//let sum= num1 + num2;
//let finalAvg= sum/2;
//console.log(finalAvg);
//};


//function call
//console.log('a');
//calculateAverage(10,15);
//console.log('b');
//calculateAverage(31,40);
//console.log('c');

//let calculateAverage= function(num1,num2) {
 //   let sum = num1 + num2;
 //   let finalAvg = sum/2;
 //   return finalAvg;
//};

//let result = calculateAverage(10,15);
//console.log(result + 2);

let yellOrwhisper = function(str){
     if (str.length > 4){
         return str.toUpperCase();
     } else {
         return str.toLowerCase();
     }
};

console.log(yellOrwhisper('exCellEnt'));
console.log(yellOrwhisper('doG'));