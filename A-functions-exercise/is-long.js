//let isLong = function(str){
  //  return str.length > 5;
//};

let isLong = function(str){
    if (str.length > 5){
        return true;
    } else {
        return false;
    }
};

console.log(isLong("pie")); 
console.log(isLong("kite")); 
console.log(isLong("kitty")); 
console.log(isLong("telescope")); 
console.log(isLong("thermometer")); 
console.log(isLong("restaurant")); 