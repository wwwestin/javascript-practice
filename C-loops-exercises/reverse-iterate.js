let reverseIterate = function (str){
    for (let i = str.length -1; i >=0; i--) {
        console.log(str[i]);
    }
};

reverseIterate("carrot");
// prints
//  t
//  o
//  r
//  r
//  a
//  c

reverseIterate("box");
// prints
//  x
//  o
//  b