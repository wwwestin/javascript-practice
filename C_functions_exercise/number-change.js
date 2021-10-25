let numberChange = function(n){
    if (n % 2 === 0) {
        return n/2;
    } else {
        return n*2; 
    }    
};

console.log(numberChange(6)); 
console.log(numberChange(7)); 
console.log(numberChange(16)); 
console.log(numberChange(21));