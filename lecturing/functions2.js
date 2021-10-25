let yellOrWhisper = function (str){
  if(str.length > 4){
      return str.toUpperCase();
  } else {
      return str.toLowerCase();
  }
};

console.log(yellOrWhisper('exCellEnt'));
console.log(yellOrWhisper('doG'));
console.log(yellOrWhisper('mE'));
