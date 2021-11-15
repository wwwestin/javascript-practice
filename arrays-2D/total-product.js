let totalProduct = function (array) {
    let product = 1;
    
    for (let i = 0; i < array.length; i++) {
        let subarray = array[i];

        for (let j = 0; j < subarray.length; j++) {
            product *= subarray[j];
        }
    }
    return product;
};

let array1 = [
    [3, 5, 2],
    [6, 2],
  ];
  console.log(totalProduct(array1)); // 360
  
  let array2 = [
    [4, 6],
    [2, 3],
    [1, 2],
  ];
  console.log(totalProduct(array2)); // 288