//let endsInLy = function(str){
    //let secondlast = str[str.length - 2];
    //let last = str[str.length -1];

    //return secondlast === 'l' && last === 'y';
//};

let endsInLy = function(str){
    return str.endsWith('ly');
};
console.log(endsInLy("pretty")); 
console.log(endsInLy("instant")); 
console.log(endsInLy("analytic")); 
console.log(endsInLy("timidly")); 
console.log(endsInLy("fly")); 
console.log(endsInLy("gallantly")); 