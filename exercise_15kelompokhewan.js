function groupAnimals(animals) {
  // you can only write your code here!
  var abjad = 'abcdefghijklmnopqrstuvwxyz';
  var hewan = [];
  
  for(let i = 0; i < abjad.length; i++){
    var pengelompokkan = [];
    for(let j = 0; j < animals.length; j++){
      if(animals[j][0] === abjad[i]){
        pengelompokkan.push(animals[j])
      }
    }
    if(pengelompokkan.length > 0){
      hewan.push(pengelompokkan)
    }
  }
  return hewan
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] 