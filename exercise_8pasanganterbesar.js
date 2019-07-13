function pasanganTerbesar(num) {
  // you can only write your code here!
  let strnum = num.toString();
  let arr = [];


  for(let i = 0; i < strnum.length; i++){
    arr.push(strnum[i] + strnum[i + 1])
  }
  let urut = arr.sort(function(a,b){
    return b - a
  })
  return urut[0]

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99