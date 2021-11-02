let fizzBuzz = function (max) {
    for (let i = 1; i <= max; i++) {
        if ((i % 5 === 0 || i % 3 === 0) && !(i % 5 === 0 && i % 3 ===0)) {
            console.log(i);
        } 
    }

};

fizzBuzz(18);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18

fizzBuzz(33);
// prints
//  3
//  5
//  6
//  9
//  10
//  12
//  18
//  20
//  21
//  24
//  25
//  27
//  33