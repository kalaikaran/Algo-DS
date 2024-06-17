function fizzBizz(num) {
  let result = [];
  for (let n = 1; n <= num; n++) {
    let outStr = "";
    if(n%3 === 0){
      outStr += "fizz"
    } 
    if(n%5 === 0 ){
      outStr += "buzz"
    }
    result.push(outStr || n)
  }
  return result;
}


function fizzBizz(num) {
  let result = [];
  for (let n = 1; n <= num; n++) {
    let outStr = "";
    if(n%3 === 0){
      outStr += "fizz"
    } 
    if(n%5 === 0 ){
      outStr += "buzz"
    }
    console.log(outStr || n);
  }
}

console.log(fizzBizz(15));