function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  let arr = kalimat.split(' ');
  //console.log(arr);
  let jumlahKata = arr.length
  return jumlahKata
  
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5