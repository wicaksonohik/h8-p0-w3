function tentukanDeretGeometri(arr){
    var deretGeometri = []
    for(var i = 0; i < arr.length-1; i++){
      var hasil = arr[i+1]/arr[i];
      deretGeometri.push(hasil);
      
    }
    for(var j = 0 ; j <= deretGeometri.length-1; j++){
      if(deretGeometri[j] !== deretGeometri[0]){
        return false
      }
    }return true
  
  }
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false