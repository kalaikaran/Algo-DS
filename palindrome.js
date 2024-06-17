function palindrone(str){
  let strLength = str.length,
    middle = Math.floor(strLength/2);
  for(let index = 0; index < middle; index++){
    if(str.charAt(index) !== str.charAt(strLength - 1 - index)){
        return false
    }
  }
  return true;
}

console.log(palindrone("alfa"));