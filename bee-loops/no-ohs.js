let noOhs = function (str) {
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char !== 'o') {
        console.log(str[i]);
    }
}
};

noOhs("code");
// prints
//  c
//  d
//  e

noOhs("school");
// prints
//  s
//  c
//  h
//  l