function targetTerdekat(arr) {
  // you can only write your code here!
  var O = [];
  var X = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'o' && arr[i] !== ' '){
      O.push(i)
    }else if(arr[i] === 'x' && arr[i] !== ' '){
      X.push(i)
    }
  }
  selisih = [];
  for(let n = 0; n < X.length; n++){
    selisih.push(Math.abs(O[0] - X[n]))
  }
  var sort = selisih.sort(function (a,b){
    return a-b
  })
  if( X.length === 0){
    return 0
  }
  return sort[0]
  
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2