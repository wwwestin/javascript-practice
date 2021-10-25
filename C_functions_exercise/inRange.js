let inRange = function(min,max,n){
    return n >= min && n <= max;
};

console.log(inRange(5, 13, 8)); 
console.log(inRange(5, 13, 29)); 
console.log(inRange(100, 125, 100)); 
console.log(inRange(100, 125, 99)); 
console.log(inRange(40, 45, 44)); 
console.log(inRange(40, 45, 45)); 
console.log(inRange(40, 45, 46)); 

