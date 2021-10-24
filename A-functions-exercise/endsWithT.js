let endsWithT = function(str){
   let lastchar = str[str.length - 1];
   return lastchar === 't';
};
   
console.log(endsWithT("smart")); 
console.log(endsWithT("racket")); 
console.log(endsWithT("taco")); 
console.log(endsWithT("boomerang")); 