function palindrome(kata) {
  // you can only write your code here!
  var balik = '';
  for(let i = 0; i < kata.length; i++){
    balik += kata[kata.length - 1 - i];
  }
  return kata === balik
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false