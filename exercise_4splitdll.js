var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
  arr.splice(1,2,'Roman Alamsyah Elsharawy','Provinsi Bandar Lampung');
  arr.splice(4,1,'Pria','SMA Internasional Metro');
  console.log(arr); //output 1

  var splitTanggal = arr[3].split('/');
  var bulan = parseInt(splitTanggal[1]);
  switch(bulan){
    case 1:
    console.log('Januari');
    break;
    case 2:
    console.log('Februari');
    break;
    case 3:
    console.log('Maret');
    break;
    case 4:
    console.log('April');
    break;
    case 5:
    console.log('Mei');
    break;
    case 6:
    console.log('Juni');
    break;
    case 7:
    console.log('Juli');
    break;
    case 8:
    console.log('Agustus');
    break;
    case 9:
    console.log('September');
    break;
    case 10: 
    console.log('Oktober');
    break;
    case 11:
    console.log('November');
    break;
    case 12:
    console.log('Desember');
    break; //output 2
  }
  var sortDibalik = splitTanggal.sort(function(a, b){
    return b-a
  })
  console.log(sortDibalik); //output 3

  splitTanggal = arr[3].split('/');
  console.log(splitTanggal.join('-')) //output 4

  console.log(arr[1].slice(0,15)); //output 5
    

}
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */