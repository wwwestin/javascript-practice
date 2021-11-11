
// nested = code within other code
//for (let i = 1; i <= 5; i++) {
    //console.log(i);
    //console.log('beginning j');
   // for (let j = 1; j <= 3; j++) {
   //  console.log('   ' + j);
   // }
   // console.log('finishing j');
//};

//for (let i = 1; i <= 5; i++) {
  //  for (let j = 1; j <= 4; j++) {
    //    console.log(i,j);
    //}
//};

let array = ['red', 'blue', 'green', 'orange'];

for (let i = 0; i < array.length; i++) {
     for (let j = i + 1; j < array.length; j++){
         console.log(array[i], array[j]);
     }
};

//let array = ['ray romano', 'romano ray', 'ray romano', 'romano ray'];

//for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++){
//         console.log(array[i], array[j]);
//     }
//};