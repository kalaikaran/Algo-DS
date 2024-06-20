
// for (let count = 1; count <= 4; count++) {
//   console.log("#".repeat(count));
// }
console.log(repeat(2));


function repeat(n){
  if(n === 0){
    return "";
  }
  return "#" + "\n" + repeat(n-1) ;
}