function reverseInt(integer){
  let reversed = 0, number = Math.abs(integer);
  while(number > 0){
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    number = Math.floor(number/10);
  }
  return reversed * Math.sign(integer);
}
// // console.log(Math.abs("0005"));
// console.log(123 % 10);
// console.log( Math.floor(123 / 10));
// console.log(Math.abs(-1213));
console.log(reverseInt(15))