function angkaPalindrome(num) {
  // you can only write your code here!
  for(let i = 0; i < num; i ++){
    let temp = '';
    let str = num.toString();
    for(let n = str.length - 1; n >= 0; n--){
      temp += str[n]
    }
    if(str === temp){
      return num
    }else{
      num ++
    }
  }
  
  
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001