let divisibleRange = function (min, max, num) {

        for (let i = min; i < max; i++) {
            if (i % num === 0) {
                console.log(i);
            }
        }
};

divisibleRange(17, 40, 9);
// prints
//  18
//  27
//  36

divisibleRange(10, 24, 4);
// prints
//  12
//  16
//  20