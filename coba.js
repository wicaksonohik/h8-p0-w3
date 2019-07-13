let buah = ['jeruk','apel','durian','salak'];
let nano = buah.slice(1,4)
let X = [];
let flag = true
for(let i = 0; i < buah.length; i++){
  if(i != 0){
    X.push(buah[i])
  } 
}
//console.log(X);
//console.log(nano);

var students = [];
var phase0 = ['antonio','banderaz'];
var phase1 = ['yoga', 'husein'];

let studentsAge = [
  ['antonio', 10],['banderaz',9],['celine',12],['dion',8]
];

for(let i = 0; i < studentsAge.length; i++){
  for(let j = 0; j < studentsAge.length; j++){
    if(studentsAge[i][1] < studentsAge[j][1] && i != j){
      let temp = studentsAge[i]
      studentsAge[i] = studentsAge[j];
      studentsAge[j] = temp
    }
  }
}
console.log(studentsAge);

let arrstr = ['11', '12','2','23']
let urut = arrstr.sort(function (a,b){
  return a > b
})

console.log(arrstr);
